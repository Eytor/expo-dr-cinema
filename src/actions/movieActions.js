import * as constants from '../constants';


// eslint-disable-next-line import/prefer-default-export
export const setMovie = (id, name, poster, plot, duration, releaseYear, genres) => ({
    type: constants.CHANGE_MOVIE,
    payload: {
        id, name, poster, plot, duration, releaseYear, genres,
    },
});
