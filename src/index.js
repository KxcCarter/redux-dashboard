import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!

const speedControl = (state = 0, action) => {
  if (action.type === 'INCREASE') {
    return state + 1;
  } else if (action.type === 'DECREASE') {
    if (state === 0) {
      return state;
    }
    return state - 1;
  }
  return state;
};

const passengerList = (state = ['Luke'], action) => {
  if (action.type === 'ADD_PASSENGER') {
    return [...state, action.payload];
  }
  return state;
};

// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({
    speedControl,
    passengerList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
