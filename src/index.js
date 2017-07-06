import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducers from './store/reducers/index'
import App from './app'
import { composeWithDevTools } from 'remote-redux-devtools';


const store = createStore(reducers,composeWithDevTools(
  applyMiddleware(thunk)))

const Beak = ()=>
(
  <Provider store={store}>
    <App/>
  </Provider>
)

export default Beak