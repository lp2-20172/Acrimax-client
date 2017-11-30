from django.contrib import admin
from catalogo.models import Producto
from catalogo.models import UnidadMed
from catalogo.models import Categoria
from catalogo.models import Venta, ShoppingCart, Cliente, Departamento, Pedido, Envio, Detalle_Pedido, Tipo_Producto

# Register your models here.


admin.site.register(UnidadMed)
admin.site.register(Categoria)
admin.site.register(Cliente)
admin.site.register(ShoppingCart)
admin.site.register(Venta)
admin.site.register(Departamento)
admin.site.register(Pedido)
admin.site.register(Envio)
admin.site.register(Detalle_Pedido)
admin.site.register(Tipo_Producto)


class ProductoAdmin(admin.ModelAdmin):
    """docstring for ProductoAdmin"""
    list_per_page = 2
    list_display = ("codigo", "nombre",
                    "unidad_med_codigo", "categorias")
    search_fields = ("codigo", "nombre",)

    def unidad_med_codigo(self, obj):
        return obj.unidad_med.codigo

    def categorias(self, obj):
        return obj.categoria.nombre

admin.site.register(Producto, ProductoAdmin)
