import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/App/index';
import MoreInfo from './components/MoreInfo/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MoreInfo />
  </React.StrictMode>,
  document.getElementById('app-root')
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
