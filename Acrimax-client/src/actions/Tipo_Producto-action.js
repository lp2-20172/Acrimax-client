//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/Tipo_Producto/'

export const TIPO_PRODUCTO_LIST_REQUEST = "TIPO_PRODUCTO_LIST_REQUEST"
export const TIPO_PRODUCTO_LIST_SUCCESS = 'TIPO_PRODUCTO_LIST_SUCCESS'
export const TIPO_PRODUCTO_LIST_FAILURE = 'TIPO_PRODUCTO_LIST_FAILURE'

export const Tipo_ProductoList = () => ({
    type: TIPO_PRODUCTO_LIST_REQUEST,
})

export const Tipo_ProductoListSuccess = (list) => ({
    type: TIPO_PRODUCTO_LIST_SUCCESS,
    list
})

export const Tipo_ProductoListFailure = error => ({
    type: TIPO_PRODUCTO_LIST_FAILURE,
    error
})

export const TIPO_PRODUCTO_ADD = "TIPO_PRODUCTO_ADD"
export const TIPO_PRODUCTO_FETCH = "TIPO_PRODUCTO_FETCH"
export const TIPO_PRODUCTO_UPDATE = "TIPO_PRODUCTO_UPDATE"
export const TIPO_PRODUCTO_DELETE = "TIPO_PRODUCTO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(Tipo_ProductoListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(Tipo_ProductoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(Tipo_ProductoListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(Tipo_ProductoListFailure('Error '+error.message))
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
                    "type": TIPO_PRODUCTO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/Tipo_Producto/list')
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
                    "type": TIPO_PRODUCTO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/Tipo_Producto/list')
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
                    "type": TIPO_PRODUCTO_DELETE,
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