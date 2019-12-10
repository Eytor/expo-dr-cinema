import * as constants from '../constants';
import { getAllCinemas } from '../service/services';


export const setCinema = (id, name, address, city, phone, website, description) => ({
    type: constants.CHANGE_CINEMA,
    payload: {
        id, name, address, city, phone, website, description,
    },
});

export const getCinemas = (token) => async (dispatch) => {
    try {
        const currentCinemas = await getAllCinemas(token);
        dispatch(getCinemasSuccess(currentCinemas));
    } catch (error) {
        console.log('an error occurred getting cinemas', error);
    }
};

const getCinemasSuccess = (currentCinemas) => ({
    type: constants.GET_CINEMAS,
    payload: currentCinemas,
});
