from decimal import Decimal
from rest_framework import serializers

from .models import Producto, Precio, Inventario

# Precio Serializer


class PrecioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Precio
        fields = ['precio', 'iva']

# Inventario Serializer


class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario
        fields = ['cantidad']

# Producto Serializer


class ProductoSerializer(serializers.ModelSerializer):
    # precio = serializers.StringRelatedField(many=True)
    precio = PrecioSerializer(many=True)
    # iva = PrecioSerializer(many=True)
    cantidad = InventarioSerializer(many=True)

    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'codigo',
                  'observacion', 'precio', 'cantidad']

    # def validate_codigo(self, value):
    #     producto = Producto.objects.filter(codigo=value)
    #     print(self.request.method)
    #     if producto:
    #         raise serializers.ValidationError('Ya existe el producto')
    #     return value

    def create(self, validated_data):
        print('hola serializer')
        print(validated_data)
        precio = validated_data.pop('precio')
        cantidad = validated_data.pop('cantidad')
        codigo = validated_data.pop('codigo')
        # producto = Producto.objects.create(**validated_data)
        producto, created = Producto.objects.get_or_create(
            codigo=codigo, defaults={**validated_data})
        print('creado: ', created)
        for precio_data in precio:
            # for key, value in precio_data.items():
            #     print(key, value)

            Precio.objects.create(producto=producto, **precio_data)

        for cantidad_data in cantidad:

            Inventario.objects.create(producto=producto, **cantidad_data)
        return producto

    def update(self, instance, validated_data):
        precio = validated_data.pop('precio')
        cantidad = validated_data.pop('cantidad')
        instance.save()
        if not instance.precio.all():
            for precio_data in precio:
                Precio.objects.create(producto=instance, **precio_data)
        else:
            if precio[-1]['precio'] != instance.precio.last().precio:
                for precio_data in precio:
                    Precio.objects.create(producto=instance, **precio_data)

        if not instance.cantidad.all():
            for cantidad_data in cantidad:
                Inventario.objects.create(
                    producto=instance, **cantidad_data)
        else:
            if cantidad[-1]['cantidad'] != instance.cantidad.last().cantidad:
                for cantidad_data in cantidad:
                    Inventario.objects.create(
                        producto=instance, **cantidad_data)

        return instance
