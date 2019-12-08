import * as constants from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const setCinema = (id, name, address, city, phone, website, description) => ({
    type: constants.CHANGE_CIMENA,
    payload: {
        id, name, address, city, phone, website, description,
    },
});
