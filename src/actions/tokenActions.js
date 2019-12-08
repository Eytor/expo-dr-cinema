import * as constants from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const setToken = (token) => ({
    type: constants.SET_TOKEN,
    payload: token,
});
