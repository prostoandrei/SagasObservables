import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Sagas from './__compared__/sagas';
import Observables from './__compared__/observables'
import { Provider } from 'react-redux'
import { store } from './__compared__/sagas/store'
import './index.css';

const TARGET = 'SAGAS'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {TARGET === 'SAGAS'
        ? <Sagas />
        : <Observables />
      }
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
