//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/unidadMed/'

export const UNIDADMED_LIST_REQUEST = "UNIDADMED_LIST_REQUEST"
export const UNIDADMED_LIST_SUCCESS = 'UNIDADMED_LIST_SUCCESS'
export const UNIDADMED_LIST_FAILURE = 'UNIDADMED_LIST_FAILURE'

export const unidadMedList = () => ({
    type: UNIDADMED_LIST_REQUEST,
})

export const unidadMedListSuccess = (list) => ({
    type: UNIDADMED_LIST_SUCCESS,
    list
})

export const unidadMedListFailure = error => ({
    type: UNIDADMED_LIST_FAILURE,
    error
})

export const UNIDADMED_ADD = "UNIDADMED_ADD"
export const UNIDADMED_FETCH = "UNIDADMED_FETCH"
export const UNIDADMED_UPDATE = "UNIDADMED_UPDATE"
export const UNIDADMED_DELETE = "UNIDADMED_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(unidadMedListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(unidadMedListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(unidadMedListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(unidadMedListFailure('Error '+error.message))
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
                    "type": UNIDADMED_ADD,
                    "data": r.data //no usado
                })
                history.push('/unidadMed/categorias/list')
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
                    "type": UNIDADMED_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/unidadMed/list')
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
                    "type": UNIDADMED_DELETE,
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