//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/Envio/'

export const ENVIO_LIST_REQUEST = "ENVIO_LIST_REQUEST"
export const ENVIO_LIST_SUCCESS = 'ENVIO_LIST_SUCCESS'
export const ENVIO_LIST_FAILURE = 'ENVIO_LIST_FAILURE'

export const envioList = () => ({
    type: ENVIO_LIST_REQUEST,
})

export const envioListSuccess = (list) => ({
    type: ENVIO_LIST_SUCCESS,
    list
})

export const envioListFailure = error => ({
    type: ENVIO_LIST_FAILURE,
    error
})

export const ENVIO_ADD = "ENVIO_ADD"
export const ENVIO_FETCH = "ENVIO_FETCH"
export const ENVIO_UPDATE = "ENVIO_UPDATE"
export const ENVIO_DELETE = "ENVIO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(envioListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(envioListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(envioListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(envioListFailure('Error '+error.message))
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
                    "type": ENVIO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/envio/list')
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
                    "type": envio_FETCH,
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
                    "type": ENVIO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/envio/list')
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
                    "type": ENVIO_DELETE,
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