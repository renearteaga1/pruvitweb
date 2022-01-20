from django.contrib import admin

from .models import Ingreso, Proveedor, Inventario, Precio, Producto

# Register your models here.

admin.site.register(Ingreso)
admin.site.register(Proveedor)
admin.site.register(Inventario)
admin.site.register(Precio)
admin.site.register(Producto)
