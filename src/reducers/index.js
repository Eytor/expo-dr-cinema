import { combineReducers } from 'redux';
import token from './tokenReducer';
import cinema from './cinemaReducer';
import movie from './movieReducer';
import movies from './moviesReducer';
import cinemas from './cinemasReducer';

export default combineReducers({
    token, cinema, movie, movies, cinemas,
});
