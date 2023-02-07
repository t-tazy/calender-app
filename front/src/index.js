import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer);

// ローカライズ
dayjs.locale('ja');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
