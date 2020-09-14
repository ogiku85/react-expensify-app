import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/app-router';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import {startSetExpenses} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

console.log('starting app');

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() =>{
    ReactDOM.render(jsx, document.getElementById('app'));
});