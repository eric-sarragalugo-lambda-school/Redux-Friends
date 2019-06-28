import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { addTokenToLocalStorage as addToken } from './middleware/addToken';
import logger from 'redux-logger';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk, addToken, logger));
const mainFontStack = `sans-serif`;
const appBackgroundColor = '#fafafa';
const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    *, *:before, *:after {
      box-sizing: inherit;
      transition: inherit;
    }
  }

  body {
    background: ${appBackgroundColor};
    font: 100% ${mainFontStack};
  }
  
  /* other global styles go here */
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
