from django.db import models
from core.models import User, Person

# Create your models here.


class Categoria(models.Model):

    codigo = models.CharField(max_length=10, null=True,  blank=True)
    nombre = models.CharField(max_length=60)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return '%s' % (self.nombre)


class UnidadMed(models.Model):

    codigo = models.CharField(max_length=10)
    nombre = models.CharField(max_length=60, null=True, blank=True)

    class Meta:
        verbose_name = "UnidadMed"
        verbose_name_plural = "UnidadMeds"

    def __str__(self):
        return '%s (%s)' % (self.codigo, self.nombre)


class Producto(models.Model):

    nombre = models.CharField(max_length=60)
    codigo = models.CharField(max_length=10, null=True, blank=True)
    precio_unidad = models.FloatField(default=0.0)
    categoria = models.ForeignKey(Categoria)
    unidad_med = models.ForeignKey(UnidadMed)
    
        
    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return '%s (%s)' % (self.nombre, self.codigo)


class Cliente(models.Model):

    ruc = models.CharField(max_length=11)
    person = models.OneToOneField(Person)

    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"

    def __str__(self):
        return '%s' % (self.ruc)


class Venta(models.Model):

    nro_doc = models.CharField(max_length=15)
    fecha = models.TimeField(auto_now_add=True)
    total = models.FloatField(default=0)
    vendedor = models.ForeignKey(User)
    cliente = models.ForeignKey(Cliente, blank=True, null=True)

    class Meta:
        verbose_name = "Venta"
        verbose_name_plural = "Ventas"

    def __str__(self):
        return '%s' % (self.nro_doc)


class ShoppingCart(models.Model):

    cantidad = models.IntegerField()
    precio_uni = models.FloatField(default=0)

    producto = models.ForeignKey(Producto)
    venta = models.ForeignKey(Venta)

    class Meta:
        verbose_name = "ShoppingCart"
        verbose_name_plural = "ShoppingCarts"

    def __str__(self):
        return 'VENTA%s - PROD: %s' % (self.venta.nro_doc, self.producto.nombre,)


class Departamento(models.Model):

    nombre = models.CharField(max_length=30)
    detalle = models.CharField(max_length=30)

    class Meta:
        verbose_name = "Departamento"
        verbose_name_plural = "Departamentos"

    def __str__(self):
        return '%s (%s)' % (self.nombre, self.detalle)


class Pedido(models.Model):

    nombre = models.CharField(max_length=30)
    fecha = models.DateField(default=0)
    precio = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Pedido"
        verbose_name_plural = "Pedidos"

    def __str__(self):
        return '%s (%s) (%s)' % (self.nombre, self.fecha, self.precio)


class Detalle_Pedido(models.Model):

    detalle_pedido = models.CharField(max_length=40)
    estado = models.CharField(max_length=35)
    fecha_pedido = models.DateTimeField(default=0)
    pedido = models.ForeignKey(Pedido, blank=True, null=True)

    class Meta:
        verbose_name = "Detalle_Pedido"
        verbose_name_plural = "Detalle_Pedidos"

    def __str__(self):
        return '%s (%s) (%s) (%s)' % (self.detalle_pedido, self.estado, self.fecha_pedido, self.pedido.nombre)


class Envio(models.Model):

    codigo_articulo = models.IntegerField()
    fecha_envio = models.DateTimeField()
    numero_unidades = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Envio"
        verbose_name_plural = "Envios"

    def __str__(self):
        return '%s (%s) (%s)' % (self.codigo_articulo, self.fecha_envio, self.numero_unidades)


class Tipo_Producto(models.Model):

    descripcion = models.CharField(max_length=35)
    producto = models.ForeignKey(Producto, blank=True, null=True)

    class Meta:
        verbose_name = "Tipo_Producto"
        verbose_name_plural = "Tipo_Productos"

    def __str__(self):
        return ' (%s) (%s)' % (self.descripcion, self.producto)
