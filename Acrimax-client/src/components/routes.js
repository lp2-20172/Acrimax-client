import { Content } from './app/AppContent'
import { ACRIMAX, Bus, Cart, About, Sandwiches}
  from './app/AppContent'
import CategoriaList from './categorias/List'
import CategoriaForm from './categorias/Form'
import ProductoList from './productos/List'
import ProductoForm from './productos/Form'
import PedidosList from './pedidos/List'
import PedidosForm from './pedidos/Form'
import VentasList from './ventas/List'
import VentasForm from './ventas/Form'
import Tipo_productoList from './Tipo_Producto/List'
import Tipo_productoForm from './Tipo_Producto/Form'
import ShoppingcartsList from './shoppingcarts/List'
import ShopingcartsForm from './shoppingcarts/Form'
import ClienteList from './cliente/List'
import ClienteForm from './cliente/Form'
import UnidadMedList from './unidadMed/List'
import UnidadMedForm from './unidadMed/Form'
import DepartamentoList from './departamento/List'
import DepartamentoForm from './departamento/Form'
import EnvioList from './envio/List'
import EnvioForm from './envio/Form'
import Detalle_pedidoList from './Detalle_pedido/List'
import Detalle_pedidoForm from './Detalle_pedido/Form'
import UsersList from './users/List'
import UsersForm from './users/Form'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'ACRIMAX',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/ACRIMAX',
    title: '',
    icon: '',
    exact: true,
    component: ACRIMAX
  },


  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'send',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'glyphicon glyphicon-user',
    component: Content,
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'send',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      },
      {
        path: '/tacos/about/:id',
        title: 'About!',
        icon: 'send',
        component: About
      }
    ]
  },
  {
    path: '/CATALOGO',
    title: 'CATALOGO',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias',
        icon: 'send',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
       {
        path: '/catalogo/productos/list',
        exact: true,
        title: 'producto',
        icon: 'send',
        component: ProductoList
      },
      {
        path: '/catalogo/productos/new',
        exact: true,
        title: 'producto New!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
      {
        path: '/catalogo/productos/edit/:id',
        exact: true,
        title: 'producto Edit!',
        icon: 'send',
        component: ProductoForm,
        novisible: true
      },
       {
        path: '/catalogo/pedidos/list',
        exact: true,
        title: 'pedidos',
        icon: 'send',
        component: PedidosList
      },
      {
        path: '/catalogo/pedidos/new',
        exact: true,
        title: 'pedidos New!',
        icon: 'send',
        component: PedidosForm,
        novisible: true
      },
      {
        path: '/catalogo/pedidos/edit/:id',
        exact: true,
        title: 'pedidos Edit!',
        icon: 'send',
        component: PedidosForm,
        novisible: true
      },
       {
        path: '/catalogo/ventas/list',
        exact: true,
        title: 'ventas',
        icon: 'send',
        component: VentasList
      },
      {
        path: '/catalogo/ventas/new',
        exact: true,
        title: 'ventas New!',
        icon: 'send',
        component: VentasForm,
        novisible: true
      },
      {
        path: '/catalogo/ventas/edit/:id',
        exact: true,
        title: 'ventas Edit!',
        icon: 'send',
        component: VentasForm,
        novisible: true
      },
      {
        path: '/catalogo/Tipo_Producto/list',
        exact: true,
        title: 'Tipo_Producto',
        icon: 'send',
        component: Tipo_productoList,
      },
      {
        path: '/catalogo/Tipo_Producto/new',
        exact: true,
        title: 'Tipo_Producto New!',
        icon: 'send',
        component: Tipo_productoForm,
        novisible: true
      },
      {
        path: '/catalogo/Tipo_Producto/edit/:id',
        exact: true,
        title: 'Tipo_Producto Edit!',
        icon: 'send',
        component: Tipo_productoForm,
        novisible: true
      },
      {
        path: '/catalogo/shoppingcarts/list',
        exact: true,
        title: 'Carrito',
        icon: 'send',
        component: ShoppingcartsList
      },
      {
        path: '/catalogo/shoppingcarts/new',
        exact: true,
        title: 'shoppingcarts New!',
        icon: 'send',
        component: ShopingcartsForm,
        novisible: true
      },
      {
        path: '/catalogo/shoppigcarts/edit/:id',
        exact: true,
        title: 'shoppigcarts Edit!',
        icon: 'send',
        component: ShopingcartsForm,
        novisible: true
      },
      {
        path: '/catalogo/cliente/list',
        exact: true,
        title: 'cliente',
        icon: 'send',
        component: ClienteList
      },
      {
        path: '/catalogo/cliente/new',
        exact: true,
        title: 'cliente New!',
        icon: 'send',
        component: ClienteForm,
        novisible: true
      },
      {
        path: '/catalogo/cliente/edit/:id',
        exact: true,
        title: 'cliente Edit!',
        icon: 'send',
        component: ClienteForm,
        novisible: true
      },
        {
        path: '/catalogo/unidadMed/list',
        exact: true,
        title: 'unidadMed',
        icon: 'send',
        component: UnidadMedList
      },
      {
        path: '/catalogo/unidadMed/new',
        exact: true,
        title: 'unidadMed New!',
        icon: 'send',
        component: UnidadMedForm,
        novisible: true
      },
      {
        path: '/catalogo/unidadMed/edit/:id',
        exact: true,
        title: 'unidadMed Edit!',
        icon: 'send',
        component: UnidadMedForm,
        novisible: true
      },
      {
        path: '/catalogo/departamento/list',
        exact: true,
        title: 'departamento',
        icon: 'send',
        component: DepartamentoList
      },
      {
        path: '/catalogo/departamento/new',
        exact: true,
        title: 'departamento New!',
        icon: 'send',
        component: DepartamentoForm,
        novisible: true
      },
      {
        path: '/catalogo/departamento/edit/:id',
        exact: true,
        title: 'departamento Edit!',
        icon: 'send',
        component: DepartamentoForm,
        novisible: true
      },
      {
        path: '/catalogo/envio/list',
        exact: true,
        title: 'envio',
        icon: 'send',
        component: EnvioList
      },
      {
        path: '/catalogo/envio/new',
        exact: true,
        title: 'envio New!',
        icon: 'send',
        component: EnvioForm,
        novisible: true
      },
      {
        path: '/catalogo/envio/edit/:id',
        exact: true,
        title: 'envio Edit!',
        icon: 'send',
        component: EnvioForm,
        novisible: true
      },
      {
        path: '/catalogo/Detalle_pedido/list',
        exact: true,
        title: 'Detalle_pedido',
        icon: 'send',
        component: Detalle_pedidoList
      },
      {
        path: '/catalogo/Detalle_pedido/new',
        exact: true,
        title: 'Detalle_pedido New!',
        icon: 'send',
        component: Detalle_pedidoForm,
        novisible: true
      },
      {
        path: '/catalogo/Detalle_pedido/edit/:id',
        exact: true,
        title: 'Detalle_pedido Edit!',
        icon: 'send',
        component: Detalle_pedidoForm,
        novisible: true
      },
      {
        path: '/core/users/list',
        exact: true,
        title: 'users',
        icon: 'send',
        component: UsersList
      },
      {
        path: '/core/users/new',
        exact: true,
        title: 'users New!',
        icon: 'send',
        component: UsersForm,
        novisible: true
      },
      {
        path: '/core/users/edit/:id',
        exact: true,
        title: 'users Edit!',
        icon: 'send',
        component: UsersForm,
        novisible: true
      },
       
       
    ]
  }
]

export { routes, routese }