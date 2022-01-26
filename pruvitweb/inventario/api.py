from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import Producto, Precio
from .serializers import PrecioSerializer, ProductoSerializer

# Producto Viewset


class ProductoViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProductoSerializer

    queryset = Producto.objects.all()

    # def create(self, request, *args, **kwargs):
    #     print('Hola')
    #     if request.method == 'POST':
    #         print('estoy en post')
    #         serializer = ProductoSerializer(data=request.data)
    #         print(serializer)
    #         print(serializer.is_valid())
    #         if serializer.is_valid():
    #             print('precio seria')
    #             print(serializer.validated_data['precio'])
    #         print('post')

    #         print(request.data)

    #     return Response(serializer.data)


# Precio Viewset
class PrecioViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PrecioSerializer

    queryset = Precio.objects.all()
