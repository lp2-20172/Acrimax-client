import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
import producto from './producto-reducer'
import Tipo_Producto from './Tipo_Producto-reducer'
import pedido from './pedido-reducer'
import venta from './venta-reducer'
import shoppincart from './shoppincarts-reducer'
import cliente from './cliente-reducer'
import unidadMed from './unidadMed-reducer'
import departamento from './departamento-reducer'
import envio from './envio-reducer'
import Detalle_pedido from './Detalle_pedido-reducer'
import users from './users-reducer'


//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
  auth: auth,
   // counter: counterReducer,
  categoria: categoria,
  producto: producto,
  Tipo_Producto: Tipo_Producto,
  pedido: pedido,
  venta: venta,
  shoppincart: shoppincart,
  cliente: cliente,
  unidadMed: unidadMed,
  departamento: departamento,
  envio: envio,
  Detalle_pedido: Detalle_pedido,
  users: users,

  //  ecomm: ecomm,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;