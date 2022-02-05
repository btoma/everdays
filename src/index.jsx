import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import homeReducer from './features/funeralHomes';
import paginationReducer from './features/pagination'
import sortingReducer from './features/sorting'

const store = configureStore({
  reducer: {
    funeralHomes: homeReducer,
    pagination: paginationReducer,
    sort: sortingReducer,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
