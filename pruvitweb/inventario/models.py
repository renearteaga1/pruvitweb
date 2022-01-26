from django.db import models

# Create your models here.


class Producto(models.Model):
    nombre = models.CharField(max_length=30)
    codigo = models.CharField(max_length=20, unique=True)
    proveedor = models.CharField(max_length=49, blank=True)
    color = models.CharField(max_length=19, blank=True)
    observacion = models.TextField(max_length=99, blank=True)

    def __str__(self):
        return self.nombre


class Precio(models.Model):
    producto = models.ForeignKey(
        Producto, related_name='precio', on_delete=models.CASCADE)
    precio = models.DecimalField(max_digits=5, decimal_places=2)
    precio_anterior = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True)
    iva = models.DecimalField(
        max_digits=3, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return self.producto.nombre


class Inventario(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.DecimalField(max_digits=9, decimal_places=2)

    def __str__(self):
        return self.producto.nombre


class Proveedor(models.Model):
    razon_social = models.CharField(max_length=70)
    nombre_comercial = models.CharField(max_length=70)
    telefono = models.CharField(max_length=14)
    persona_contacto = models.CharField(max_length=39)
    observacion = models.TextField(max_length=99)

    def __str__(self):
        return self.razon_social


class Ingreso(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.DecimalField(max_digits=9, decimal_places=2)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    precio = models.ForeignKey(Precio, on_delete=models.CASCADE)

    def __str__(self):
        return self.producto.nombre
