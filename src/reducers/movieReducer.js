import * as constants from '../constants/index';

const initialState = {
    id: null,
    name: '',
    Image: '',
    Plot: '',
    duration: 0,
    releaseYear: '',
    genres: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
    case constants.CHANGE_MOVIE:
        return action.payload;
    case constants.CHANGE_UPCOMING_MOVIE:
        return action.payload;
    default: return state;
    }
}
