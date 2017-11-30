import { SHOPPINGCART_LIST_REQUEST, SHOPPINGCART_LIST_SUCCESS, SHOPPINGCART_LIST_FAILURE } from '../actions/shoppingcart-action'
import { SHOPPINGCART_ADD, SHOPPINGCART_FETCH, SHOPPINGCART_UPDATE, SHOPPINGCART_DELETE } from '../actions/shoppingcart-action'

const initialState = {
    list: [],
    data: {}
}

const shoppincartsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOPPINGCART_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case SHOPPINGCART_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case SHOPPINGCART_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case SHOPPINGCART_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case SHOPPINGCART_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case SHOPPINGCART_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case SHOPPINGCART_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default shoppincartsReducer
