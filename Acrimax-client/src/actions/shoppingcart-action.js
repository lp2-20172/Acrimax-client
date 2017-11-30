//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/ShoppingCart/'

export const SHOPPINGCART_LIST_REQUEST = "SHOPPINGCART_LIST_REQUEST"
export const SHOPPINGCART_LIST_SUCCESS = 'SHOPPINGCART_LIST_SUCCESS'
export const SHOPPINGCART_LIST_FAILURE = 'SHOPPINGCART_LIST_FAILURE'

export const shoppingcartList = () => ({
    type: SHOPPINGCART_LIST_REQUEST,
})

export const shoppingcartListSuccess = (list) => ({
    type: SHOPPINGCART_LIST_SUCCESS,
    list
})

export const shoppingcartListFailure = error => ({
    type: SHOPPINGCART_LIST_FAILURE,
    error
})

export const SHOPPINGCART_ADD = "SHOPPINGCART_ADD"
export const SHOPPINGCART_FETCH = "SHOPPINGCART_FETCH"
export const SHOPPINGCART_UPDATE = "SHOPPINGCART_UPDATE"
export const SHOPPINGCART_DELETE = "SHOPPINGCART_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(shoppingcartListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(shoppingcartListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(shoppingcartListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(shoppingcartListFailure('Error '+error.message))
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
                    "type": SHOPPINGCART_ADD,
                    "data": r.data //no usado
                })
                history.push('/catalogo/shoppingcar/list')
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
                    "type": SHOPPINGCART_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/shoppingcart/categorias/list')
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
                    "type": SHOPPINGCART_DELETE,
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
