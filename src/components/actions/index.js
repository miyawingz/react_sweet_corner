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