import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import standbyReducer from './reducers';

const store = createStore(
  standbyReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
