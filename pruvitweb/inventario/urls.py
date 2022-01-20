from django.urls import path
from rest_framework import routers

from .api import ProductoViewset
from . import views

app_name = "inventario"

router = routers.DefaultRouter()
router.register('api/producto', ProductoViewset, 'producto')

urlpatterns = [
    path('', views.inventario_index, name="inventario_index"),
] + router.urls