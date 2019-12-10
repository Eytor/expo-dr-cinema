import * as constants from '../constants';
import { getAllMovies } from '../service/services';

export const getMovies = (token) => async (dispatch) => {
    try {
        const currentMovies = await getAllMovies(token);
        dispatch(getCurrentMoviesSuccess(currentMovies));
    } catch (error) {
        console.log('an error occurred getting token', error);
    }
};

const getCurrentMoviesSuccess = (currentMovies) => ({
    type: constants.GET_MOVIES,
    payload: currentMovies,
});


export const setMovie = (
    id,
    name,
    poster,
    plot,
    duration,
    releaseYear,
    genres,
    showtimes,
    certificateColor,
) => ({
    type: constants.CHANGE_MOVIE,
    payload: {
        id, name, poster, plot, duration, releaseYear, genres, showtimes, certificateColor,
    },
});

export const setUpcomingMovie = (id, name, poster, plot, trailers) => ({
    type: constants.CHANGE_UPCOMING_MOVIE,
    payload: {
        id, name, poster, plot, trailers,
    },
});
