import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import $ from 'jquery';

import App from './components/App';
import reducers from './reducers/reducers';

const appRoot = window.document.getElementById('container');
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  appRoot,
);

$(window.document).ready(() => {
});
