from django.db.models import OuterRef, Subquery

from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from .models import Producto, Precio
from .serializers import PrecioSerializer, ProductoSerializer

# Producto Viewset


class ProductoViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProductoSerializer

    queryset = Producto.objects.all().prefetch_related(
        'precio').prefetch_related('cantidad')

    '''
    PREFETCH FOR LIMITING SUBQUERIES RESULTS
    
    from django.db.models import OuterRef, Subquery, Prefetch
    subq = Subquery(Precio.objects.filter(producto=OuterRef('producto')).values_list('id', flat=True)[:5])
    Producto.objects.prefetch_related(Prefetch('precio', queryset=Precio.objects.filter(id__in=subq)))

    
    '''

    # def list(self, request):
    #     queryset = Producto.objects.all()

    # return Response(serializer.data)

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

    # def update(self, request, pk=None):
    #     print('updateeee', request.data)
    #     producto = Producto.objects.get(id=pk)
    #     print('producto', producto)
    #     print()
    #     # serializer = ProductoSerializer(producto, data=request.data)
    #     serializer = self.serializer_class(producto, data=request.data)
    #     print('is valid: ', serializer.is_valid())
    #     if serializer.is_valid():
    #         print('is valid,,,,')
    #     pass


# Precio Viewset
class PrecioViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PrecioSerializer

    queryset = Precio.objects.all()


# ProductoFiltering parameters
class ProductoAutocompleteList(generics.ListAPIView):
    serializer_class = ProductoSerializer

    def get_queryset(self):
        queryset = Producto.objects.filter(
            codigo__icontains=self.request.query_params.get('codigo'))
        print(queryset)
        return queryset
