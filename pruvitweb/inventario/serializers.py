from rest_framework import serializers

from .models import Producto, Precio

# Producto Serializer


class ProductoSerializer(serializers.ModelSerializer):
    precio = serializers.StringRelatedField(many=True)

    class Meta:
        model = Producto
        fields = ['nombre', 'codigo', 'observacion', 'precio']

    def create(self, validated_data):
        precio = validated_data.get('precio')
        producto = Producto.objects.create(**validated_data)
        Precio.objects.create(producto=producto, precio=precio)
        return producto


class PrecioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Precio
        fields = '__all__'
