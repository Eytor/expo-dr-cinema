import { combineReducers } from 'redux';
import token from './tokenReducer';
import cinema from './cinemaReducer';
import movie from './movieReducer';
import movies from './moviesReducer';
import cinemas from './cinemasReducer';
import upcomingMovies from './upcomingMoviesReducer';

export default combineReducers({
    token, cinema, movie, movies, cinemas, upcomingMovies,
});
