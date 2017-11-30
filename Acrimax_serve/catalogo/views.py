from .models import Producto, Venta, Categoria, UnidadMed, Cliente, ShoppingCart, Departamento, Pedido, Envio, Detalle_Pedido, Tipo_Producto
from rest_framework import serializers, viewsets
from rest_framework import permissions


class ProductoSerializer(serializers.ModelSerializer):

    unidad_med_nombre = serializers.SerializerMethodField()
    categoria_nombre = serializers.SerializerMethodField()

    class Meta:

        model = Producto
        fields = '__all__'
        # fields = ('id', 'username', 'email', 'is_staff')

    def get_unidad_med_nombre(self, obj):
        return "%s " % (obj.unidad_med.nombre)

    def get_categoria_nombre(self, obj):
        return "%s " % (obj.categoria.nombre)


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class VentaSerializer(serializers.ModelSerializer):

    vendedor_username = serializers.SerializerMethodField()
    cliente_ruc = serializers.SerializerMethodField()

    class Meta:
        model = Venta
        fields = '__all__'

    def get_vendedor_username(self, obj):

        return "%s " % (obj.vendedor.username)

    def get_cliente_ruc(self, obj):
        return "%s " % (obj.cliente.ruc)


class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        fields = '__all__'


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Categoria.objects.filter()


class UnidadMedSerializer(serializers.ModelSerializer):

    class Meta:
        model = UnidadMed
        fields = '__all__'


class UnidadMedViewSet(viewsets.ModelViewSet):
    queryset = UnidadMed.objects.all()
    serializer_class = UnidadMedSerializer


class ClienteSerializer(serializers.ModelSerializer):

    person_first_name = serializers.SerializerMethodField()

    class Meta:
        model = Cliente
        fields = '__all__'

    def get_person_first_name(self, obj):
        return "%s " % (obj.person.first_name)


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


class ShoppingCartSerializer(serializers.ModelSerializer):

    producto_nombre = serializers.SerializerMethodField()
    venta_nro_doc = serializers.SerializerMethodField()

    class Meta:
        model = ShoppingCart
        fields = '__all__'

    def get_producto_nombre(self, obj):
        return "%s " % (obj.producto.nombre)

    def get_venta_nro_doc(self, obj):
        return "%s " % (obj.venta.nro_doc)


class ShoppingCartViewSet(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer


class DepartamentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Departamento
        fields = '__all__'


class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer


class PedidoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pedido
        fields = '__all__'


class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer


class EnvioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Envio
        fields = '__all__'


class EnvioViewSet(viewsets.ModelViewSet):
    queryset = Envio.objects.all()
    serializer_class = EnvioSerializer


class Detalle_PedidoSerializer(serializers.ModelSerializer):

    pedido_nombre = serializers.SerializerMethodField()

    class Meta:
        model = Detalle_Pedido
        fields = '__all__'

    def get_pedido_nombre(self, obj):
        return "%s " % (obj.pedido.nombre)


class Detalle_PedidoViewSet(viewsets.ModelViewSet):
    queryset = Detalle_Pedido.objects.all()
    serializer_class = Detalle_PedidoSerializer


class Tipo_ProductoSerializer(serializers.ModelSerializer):

    producto_nombre = serializers.SerializerMethodField()

    class Meta:
        model = Tipo_Producto
        fields = '__all__'

    def get_producto_nombre(self, obj):
        return "%s " % (obj.producto.nombre)


class Tipo_ProductoViewSet(viewsets.ModelViewSet):
    queryset = Tipo_Producto.objects.all()
    serializer_class = Tipo_ProductoSerializer
