import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

const root = document.getElementById('root');
const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

const rootNode = ReactDOM.createRoot(root);
rootNode.render(app);
