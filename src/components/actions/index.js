import axios from 'axios';
import types from './types';
import ProductDetails from '../products/product_details';

export function getSchedule() {
    return async function (dispatch) {
        const resp = await axios.get('data/schedule.json');

        dispatch(
            {
                type: types.GET_SCHEDULE,
                schedule: resp.data
            }
        );
    }

}

const BASE_URL = "http://api.sc.lfzprototypes.com";
export function getAllProducts() {
    return async function (dispatch) {
        try {
            const resp = await axios.get(`${BASE_URL}/api/products`)

            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            })

        }
        catch (error) {
            console.log(error);
        }

    }
}

const PRODUCT_URL = "http://api.sc.lfzprototypes.com/api/products/";
export function getProductDetails(id) {
    return async function (dispatch) {
        try {
            const resp = await axios.get(`${PRODUCT_URL}${id}`);
            dispatch({
                type: types.GET_PRODUCT_DETAILS,
                details: resp.data
            })
        }

        catch (error) {
            console.error(error);
        }
    }
}