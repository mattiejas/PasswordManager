import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import './styles/index.scss';

import reducers from './modules';
import App from './App';

const middleware = routerMiddleware();
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, middleware)),
);

/* eslint-disable-next-line no-undef */
ReactDOM.render(<App store={store} />, document.getElementById('root'));
