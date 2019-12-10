import * as constants from '../constants';
import { getAllMovies, getUpcomingMovies } from '../service/movieService';

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
    year,
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
        id, name, year, poster, plot, duration, releaseYear, genres, showtimes, certificateColor,
    },
});

export const setUpcomingMovie = (id, name, poster, plot, trailers) => ({
    type: constants.CHANGE_UPCOMING_MOVIE,
    payload: {
        id, name, poster, plot, trailers,
    },
});

export const getAllUpcomingMovies = (token) => async (dispatch) => {
    try {
        const currentMovies = await getUpcomingMovies(token);
        dispatch(getCurrentUpcomingMoviesSuccess(currentMovies));
    } catch (error) {
        console.log('an error occurred getting token', error);
    }
};

const getCurrentUpcomingMoviesSuccess = (currentMovies) => ({
    type: constants.GET_UPCOMING_MOVIES,
    payload: currentMovies,
});
