import * as constants from '../constants';


export const setCinema = (id, name, address, city, phone, website, description) => ({
    type: constants.CHANGE_CINEMA,
    payload: {
        id, name, address, city, phone, website, description,
    },
});

export const getCinemas = () => async (dispatch) => {
    try {
        const currentCinemas = await 
    } catch (error) {
        console.log('an error occurred getting cinemas', error)
    }
};

const getCinemasSuccess = (currentCinemas) => ({
    type: constants.GET_CINEMAS,
    payload: currentCinemas,
});
