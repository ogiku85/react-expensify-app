import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/app-router';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// const expenseOne = store.dispatch(addExpense({
//     description:'rent',
//     amount:'51234',
//     createdAt:1000
// }));

// const expenseTwo = store.dispatch(addExpense({
//     description:'Coffe',
//     amount:'56789',
//     createdAt:-1000
// }));

// const expenseThree = store.dispatch(addExpense({
//     description:'sweet',
//     amount:'30',
//     createdAt:2000
// }));

setTimeout(()=>{
// store.dispatch(setTextFilter('coffe'));
// store.dispatch(sortByAmount());
},3000);
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));