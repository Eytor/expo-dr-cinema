import { combineReducers } from 'redux';
import token from './tokenReducer';
import cinema from './cinemaReducer';

export default combineReducers({ token, cinema });
