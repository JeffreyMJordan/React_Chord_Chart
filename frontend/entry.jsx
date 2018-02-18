import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  ReactDOM.render(<App />, main);
});