import {combineReducers } from 'redux';
import serverReducers from './serverReducer';
import dialogReducers from './dialogReducer';

const reducers = combineReducers({
  servers:serverReducers,
  dialogs:dialogReducers
});

export default reducers;