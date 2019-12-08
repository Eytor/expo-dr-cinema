import { combineReducers } from 'redux';
import cinema from './cinemaReducer';
import token from './tokenReducer';

export default combineReducers({ cinema, token });
