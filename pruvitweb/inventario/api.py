from rest_framework import viewsets, permissions

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
    #     return


# Precio Viewset
class PrecioViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PrecioSerializer

    queryset = Precio.objects.all()
