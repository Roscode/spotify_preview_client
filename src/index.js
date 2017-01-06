import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
