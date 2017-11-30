import { UNIDADMED_LIST_REQUEST, UNIDADMED_LIST_SUCCESS, UNIDADMED_LIST_FAILURE } from '../actions/unidadMed-action'
import { UNIDADMED_ADD, UNIDADMED_FETCH, UNIDADMED_UPDATE, UNIDADMED_DELETE } from '../actions/unidadMed-action'

const initialState = {
    list: [],
    data: {}
}

const unidadMedReducer = (state = initialState, action) => {
    switch (action.type) {

        case UNIDADMED_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case UNIDADMED_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case UNIDADMED_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case UNIDADMED_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case UNIDADMED_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case UNIDADMED_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case UNIDADMED_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default unidadMedReducer
