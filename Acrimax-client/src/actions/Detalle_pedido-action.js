//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/Detalle_Pedido/'

export const DETALLE_PEDIDO_LIST_REQUEST = "DETALLE_PEDIDO_REQUEST"
export const DETALLE_PEDIDO_LIST_SUCCESS = 'DETALLE_PEDIDO_LIST_SUCCESS'
export const DETALLE_PEDIDO_LIST_FAILURE = 'DETALLE_PEDIDO_LIST_FAILURE'

export const Detalle_pedidoList = () => ({
    type: DETALLE_PEDIDO_LIST_REQUEST,
})

export const Detalle_pedidoListSuccess = (list) => ({
    type: DETALLE_PEDIDO_LIST_SUCCESS,
    list
})

export const Detalle_pedidoListFailure = error => ({
    type: DETALLE_PEDIDO_LIST_FAILURE,
    error
})

export const DETALLE_PEDIDO_ADD = "DETALLE_PEDIDO_ADD"
export const DETALLE_PEDIDO_FETCH = "DETALLE_PEDIDO_FETCH"
export const DETALLE_PEDIDO_UPDATE = "DETALLE_PEDIDO_UPDATE"
export const DETALLE_PEDIDO_DELETE = "DETALLE_PEDIDO_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(Detalle_pedidoListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(Detalle_pedidoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(Detalle_pedidoListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(Detalle_pedidoListFailure('Error '+error.message))
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
                    "type": DETALLE_PEDIDO_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/Detalle_pedido/list')
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
                    "type": DETALLE_PEDIDO_FETCH,
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
                    "type": DETALLE_PEDIDO_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/catalogo/Detalle_pedido/list')
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
                    "type": DETALLE_PEDIDO_DELETE,
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