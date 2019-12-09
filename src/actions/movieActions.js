import * as constants from '../constants';

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
