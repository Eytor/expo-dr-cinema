import * as constants from '../constants/index';

export default function (state = [], action) {
    switch (action.type) {
    case constants.GET_UPCOMING_MOVIES:
        return action.payload;
    default: return state;
    }
}
