import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import standbyReducer from './reducers';
import userReducer from './user'

const store = createStore(
  userReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
