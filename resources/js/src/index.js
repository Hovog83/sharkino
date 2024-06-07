
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './App';
import history from './utils/history';
import { store } from './redux/store/configureStore.prod.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRoutes history={history} />
        </Provider>
    </BrowserRouter>
);
