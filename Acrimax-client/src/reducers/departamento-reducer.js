import { DEPARTAMENTO_LIST_REQUEST, DEPARTAMENTO_LIST_SUCCESS, DEPARTAMENTO_LIST_FAILURE } from '../actions/departamento-action'
import { DEPARTAMENTO_ADD, DEPARTAMENTO_FETCH, DEPARTAMENTO_UPDATE, DEPARTAMENTO_DELETE } from '../actions/departamento-action'

const initialState = {
    list: [],
    data: {}
}

const departamentoReducer = (state = initialState, action) => {
    switch (action.type) {

        case DEPARTAMENTO_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case DEPARTAMENTO_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case DEPARTAMENTO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case DEPARTAMENTO_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case DEPARTAMENTO_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case DEPARTAMENTO_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case DEPARTAMENTO_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default departamentoReducer
