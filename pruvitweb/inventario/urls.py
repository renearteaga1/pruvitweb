from django.urls import path
from rest_framework import routers

from .api import ProductoViewset, PrecioViewset, ProductoAutocompleteList
from . import views

app_name = "inventario"

router = routers.DefaultRouter()
router.register('api/producto', ProductoViewset, 'producto')
router.register('api/precio', PrecioViewset, 'precio')

urlpatterns = [
    path('', views.inventario_index, name="inventario_index"),
    path('api/buscar-producto', ProductoAutocompleteList.as_view()),
] + router.urls
