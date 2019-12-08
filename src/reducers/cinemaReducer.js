import * as constants from '../constants/index';

export default function (state = {}, action) {
    switch (action.type) {
    case constants.CHANGE_CINEMA:
        return action.payload;
    default: return state;
    }
}
