import * as constants from '../constants/index';

export default function (state = '', action) {
    switch (action.type) {
    case constants.SET_TOKEN:
        return state + action.payload;
    default: return state;
    }
}
