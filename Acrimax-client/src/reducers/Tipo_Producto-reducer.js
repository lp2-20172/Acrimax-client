import { TIPO_PRODUCTO_LIST_REQUEST, TIPO_PRODUCTO_LIST_SUCCESS, TIPO_PRODUCTO_LIST_FAILURE } from '../actions/Tipo_Producto-action'
import { TIPO_PRODUCTO_ADD, TIPO_PRODUCTO_FETCH, TIPO_PRODUCTO_UPDATE, TIPO_PRODUCTO_DELETE } from '../actions/Tipo_Producto-action'

const initialState = {
    list: [],
    data: {}
}

const Tipo_ProductoReducer = (state = initialState, action) => {
    switch (action.type) {

        case TIPO_PRODUCTO_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case TIPO_PRODUCTO_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case TIPO_PRODUCTO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case TIPO_PRODUCTO_ADD: return {
            ...state,
          
        }
        case TIPO_PRODUCTO_UPDATE: return {
            ...state,
           
        }
        case TIPO_PRODUCTO_FETCH: {
            
            return {
                ...state,
                data: action.data
            }
        }
        case TIPO_PRODUCTO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default Tipo_ProductoReducer      
