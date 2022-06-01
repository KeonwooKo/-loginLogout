import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk  from 'redux-thunk';
import { Reducer } from './_reducers';

const container = document.getElementById('root');

const configureStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(configureStore);

if (container) {
    createRoot(container).render(
    <Provider
         store={configureStoreWithMiddleware(Reducer,
            window._REDUX_DEVTOOLS_EXTENSION__&&
            window._REDUX_DEVTOOLS_EXTENSION__() 
            )}
    >
        <App />
    </Provider>
     );
}
reportWebVitals();
