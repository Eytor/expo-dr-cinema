import getAuthToken from '../service/tokenService';
import * as constants from '../constants';

export default () => async (dispatch) => {
    try {
        const currentToken = await getAuthToken();
        dispatch(getCurrentTokenSuccess(currentToken));
    } catch (error) {
        console.log('an error occurred getting token', error);
    }
};

const getCurrentTokenSuccess = (currentToken) => ({
    type: constants.GET_TOKEN,
    payload: currentToken,
});
