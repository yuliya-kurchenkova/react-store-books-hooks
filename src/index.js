import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(),
        // window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
    )
);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
