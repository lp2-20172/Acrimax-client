
from django.conf.urls import url, include
from rest_framework import routers
from .views import ProductoViewSet, VentaViewSet, CategoriaViewSet, UnidadMedViewSet, ClienteViewSet, ShoppingCartViewSet, DepartamentoViewSet, PedidoViewSet, EnvioViewSet, Detalle_PedidoViewSet, Tipo_ProductoViewSet

router = routers.DefaultRouter()
router.register(r'categoria', CategoriaViewSet)
router.register(r'unidadMed', UnidadMedViewSet)
router.register(r'producto', ProductoViewSet)
router.register(r'cliente', ClienteViewSet)
router.register(r'venta', VentaViewSet)
router.register(r'departamento', DepartamentoViewSet)
router.register(r'pedido', PedidoViewSet)
router.register(r'Envio', EnvioViewSet)
router.register(r'Detalle_Pedido', Detalle_PedidoViewSet)
router.register(r'Tipo_Producto', Tipo_ProductoViewSet)
router.register(r'ShoppingCart', ShoppingCartViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
