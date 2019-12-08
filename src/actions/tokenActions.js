import * as constants from '../constants';

export const setToken = token => ({
    type: constants.SET_TOKEN,
    payload: token
})