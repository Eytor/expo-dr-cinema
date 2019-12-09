import { combineReducers } from 'redux';
import token from './tokenReducer';
import cinema from './cinemaReducer';
import movie from './movieReducer';

export default combineReducers({ token, cinema, movie });
