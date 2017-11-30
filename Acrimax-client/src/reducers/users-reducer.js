import { USERS_LIST_REQUEST, USERS_LIST_SUCCESS, USERS_LIST_FAILURE } from '../actions/users-action'
import { USERS_ADD, USERS_FETCH, USERS_UPDATE, USERS_DELETE } from '../actions/users-action'

const initialState = {
    list: [],
    data: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case USERS_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case USERS_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case USERS_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case USERS_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case USERS_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case USERS_FETCH: {
            //console.log('usersReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case USERS_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default usersReducer
