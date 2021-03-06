import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import itemReducer from "./redux/itemsReducer";
import {Provider} from 'react-redux'
import queryReducer from "./redux/queryReducer";
import fetchReducer from "./redux/responseReducer";
import {BrowserRouter as Router } from 'react-router-dom'
const rootReducers = combineReducers({
    itemReducer,
    queryReducer,
    fetchReducer
})
const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
