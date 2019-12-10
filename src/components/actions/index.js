import axios from 'axios';
import types from './types';

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