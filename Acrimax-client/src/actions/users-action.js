//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-core/users/'

export const USERS_LIST_REQUEST = "USERS_LIST_REQUEST"
export const USERS_LIST_SUCCESS = 'USERS_LIST_SUCCESS'
export const USERS_LIST_FAILURE = 'USERS_LIST_FAILURE'

export const usersList = () => ({
    type: USERS_LIST_REQUEST,
})

export const usersListSuccess = (list) => ({
    type: USERS_LIST_SUCCESS,
    list
})

export const usersListFailure = error => ({
    type: USERS_LIST_FAILURE,
    error
})

export const USERS_ADD = "USERS_ADD"
export const USERS_FETCH = "USERS_FETCH"
export const USERS_UPDATE = "USERS_UPDATE"
export const USERS_DELETE = "USERS_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(usersListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(usersListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(usersListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(usersListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": USERS_ADD,
                    "data": r.data //no usado
                })
                history.push('/core/users/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
            .then((r) => {
                /*
                dispatch({
                    "type": CATEGORIA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": USERS_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/core/users/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
        return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": USERS_DELETE,
                    "data": _id
                })
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}