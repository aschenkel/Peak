import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers/index'
import App from './app'
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducers,devToolsEnhancer())

const Beak = ()=>
(
  <Provider store={store}>
    <App/>
  </Provider>
)

export default Beak