import * as constants from '../constants';

export const setCinema = (id, name, address, city, phone, website, description) => ({
    type: constants.CHANGE_CINEMA,
    payload: {
        id, name, address, city, phone, website, description,
    },
});

export const nothing = {};
