import { DETALLE_PEDIDO_LIST_REQUEST, DETALLE_PEDIDO_LIST_SUCCESS, DETALLE_PEDIDO_LIST_FAILURE } from '../actions/Detalle_pedido-action'
import { DETALLE_PEDIDO_ADD, DETALLE_PEDIDO_FETCH, DETALLE_PEDIDO_UPDATE, DETALLE_PEDIDO_DELETE } from '../actions/Detalle_pedido-action'

const initialState = {
    list: [],
    data: {}
}

const Detalle_pedidoReducer = (state = initialState, action) => {
    switch (action.type) {

        case DETALLE_PEDIDO_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case DETALLE_PEDIDO_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case DETALLE_PEDIDO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case DETALLE_PEDIDO_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLE_PEDIDO_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case DETALLE_PEDIDO_FETCH: {
            //console.log('Reducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case DETALLE_PEDIDO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default Detalle_pedidoReducer
