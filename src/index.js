import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import { Provider } from 'react-redux'
import configureStore from './store'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
