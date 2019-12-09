import * as constants from '../constants/index';

const initialState = {
    id: null,
    name: '',
    address: '',
    city: '',
    phone: 0,
    website: '',
    description: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
    case constants.CHANGE_CINEMA:
        return action.payload;
    default: return state;
    }
}
