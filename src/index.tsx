import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import mainStore from "./redux/state/state";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/responsive.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={mainStore}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
