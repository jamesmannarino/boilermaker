import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store'
import '../public/index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>hi from reactdom render in client/app.js</div>
  </Provider>,
  document.getElementById('app')
)
