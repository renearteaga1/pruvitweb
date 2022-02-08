from rest_framework import serializers

from .models import Producto, Precio

# Precio Serializer


class PrecioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Precio
        fields = ['precio']

# Producto Serializer


class ProductoSerializer(serializers.ModelSerializer):
    # precio = serializers.StringRelatedField(many=True)
    precio = PrecioSerializer(many=True)

    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'codigo', 'observacion', 'precio']

    def create(self, validated_data):
        print('hola serializer')
        precio = validated_data.pop('precio')
        producto = Producto.objects.create(**validated_data)
        for precio_data in precio:
            # for key, value in precio_data.items():
            #     print(key, value)
            Precio.objects.create(producto=producto, **precio_data)
        return producto
