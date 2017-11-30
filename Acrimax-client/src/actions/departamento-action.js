//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/departamento/'

export const DEPARTAMENTO_LIST_REQUEST = "DEPARTAMENTO_LIST_REQUEST"
export const DEPARTAMENTO_LIST_SUCCESS = 'DEPARTAMENTO_LIST_SUCCESS'
export const DEPARTAMENTO_LIST_FAILURE = 'DEPARTAMENTO_LIST_FAILURE'

export const departamentoList = () => ({
    type: DEPARTAMENTO_LIST_REQUEST,
})

export const departamentoListSuccess = (list) => ({
    type: DEPARTAMENTO_LIST_SUCCESS,
    list
})

export const departamentoListFailure = error => ({
    type: DEPARTAMENTO_LIST_FAILURE,
    error
})

export const DEPARTAMENTO_ADD = "DEPARTAMENTO_ADD"
export const DEPARTAMENTO_FETCH = "DEPARTAMENTO_FETCH"
export const DEPARTAMENTO_UPDATE = "DEPARTAMENTO_UPDATE"
export const DEPARTAMENTO_DELETE = "DEPARTAMENTO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(departamentoListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(departamentoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(departamentoListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(departamentoListFailure('Error '+error.message))
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
                    "type": DEPARTAMENTO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/departamento/list')
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
                    "type": DEPARTAMENTO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/departamento/list')
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
                    "type": DEPARTAMENTO_DELETE,
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