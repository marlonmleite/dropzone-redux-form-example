import React from 'react';
import { render, } from 'react-dom';
import { createStore, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import { reducer as formReducer, } from 'redux-form';

import App from './App';

const reducer = combineReducers({
  form: formReducer,
});

function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
}

const store = configureStore({});
console.log(global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
