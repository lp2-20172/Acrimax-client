import { PRODUCTO_LIST_REQUEST, PRODUCTO_LIST_SUCCESS, PRODUCTO_LIST_FAILURE } from '../actions/producto-action'
import { PRODUCTO_ADD, PRODUCTO_FETCH, PRODUCTO_UPDATE, PRODUCTO_DELETE } from '../actions/producto-action'

const initialState = {
    list: [],
    data: {}
}

const productoReducer = (state = initialState, action) => {
    switch (action.type) {

        case PRODUCTO_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case PRODUCTO_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case PRODUCTO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case PRODUCTO_ADD: return {
            ...state,
          
        }
        case PRODUCTO_UPDATE: return {
            ...state,
           
        }
        case PRODUCTO_FETCH: {
            
            return {
                ...state,
                data: action.data
            }
        }
        case PRODUCTO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default productoReducer      
