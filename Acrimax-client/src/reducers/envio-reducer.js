import { ENVIO_LIST_REQUEST, ENVIO_LIST_SUCCESS, ENVIO_LIST_FAILURE } from '../actions/envio-action'
import { ENVIO_ADD, ENVIO_FETCH, ENVIO_UPDATE, ENVIO_DELETE } from '../actions/envio-action'

const initialState = {
    list: [],
    data: {}
}

const envioReducer = (state = initialState, action) => {
    switch (action.type) {

        case ENVIO_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case ENVIO_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case ENVIO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case ENVIO_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case ENVIO_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case ENVIO_FETCH: {
            //console.log('envioReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case ENVIO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default envioReducer
