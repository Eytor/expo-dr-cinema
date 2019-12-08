import * as constants from '../constants/index';

export default function (state = '', action) {
    switch (action.type) {
    case constants.CHANGE_CIMENA:
        return state + action.payload;
    default: return state;
    }
}
