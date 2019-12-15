import axios from 'axios';
import types from './types';
const BASE_URL = "http://api.sc.lfzprototypes.com";

export function getAllProducts() {
    return async function (dispatch) {
        try {
            const resp = await axios.get(`${BASE_URL}/api/products`);
            console.log('resp', resp);

            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            })

        }
        catch (error) {
            console.error('get all products fail', error);
        }

    }
}

export function getProductDetails(id) {
    return async function (dispatch) {
        try {
            const resp = await axios.get(`${BASE_URL}/api/products/${id}`);
            dispatch({
                type: types.GET_PRODUCT_DETAILS,
                details: resp.data
            })
        }

        catch (error) {
            console.error('get product details fail', error);
        }
    }
}

// export function clearProductDetails() {
//     return ({ type: types.CLEAR_PRODUCT_DETAILS })
// }

export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS })

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }

        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity
        }, axiosConfig)

        localStorage.setItem('sc-cart-token', resp.data.cartToken);

        dispatch({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total
        })
    }

    catch (error) {
        console.error('add item to cart fail', error);
    }
}

export const getActiveCart = () => async (dispatch) => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }

        const resp = await axios.get(`${BASE_URL}/api/cart`, axiosConfig);

        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        })
    }

    catch (error) {
        console.error('get active cart fail', error);
    }
}

export const getCartTotals = () => async (dispatch) => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }

        const resp = await axios.get(`${BASE_URL}/api/cart/totals`, axiosConfig);

        dispatch({
            type: types.GET_CART_TOTALS,
            total: resp.data.total
        })
    }

    catch (error) {
        console.error('get cart totail fail', error);
    }
}

export const createGuestOrder = (formValues) => async (dispatch) => {
    try {
        const { firstName, lastName, email } = formValues;
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }

        const resp = await axios.post(`${BASE_URL}/api/orders/guest`, {
            email: email,
            firstName: firstName,
            lastName: lastName
        }, axiosConfig)

        console.log(resp);

        localStorage.removeItem('sc-cart-token');

        dispatch({
            type: types.CREATE_GUEST_ORDER,
            order: resp.data
        })

        return ({
            email: email,
            orderId: resp.data.id
        })
    }
    catch (error) {
        console.error('create guest order fail', error);
    }
}