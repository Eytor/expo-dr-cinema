import * as constants from '../constants/index';

export default function (state = '', action) {
    switch (action.type) {
    case constants.SET_TOKEN:
        return action.payload;
    case constants.GET_TOKEN:
        return action.payload;
    default: return state;
    }
}
