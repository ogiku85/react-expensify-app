import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ExpenseDashboardPage from '../components/expense-dashboard-page';
import AddExpensePage from '../components/add-expense-page';
import EditExpensePage from '../components/edit-expense-page';
import HelpPage from '../components/help-page';
import NotFoundPage from '../components/not-found-page';
import Header from '../components/header';


const AppRouter = () => {
    return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                        <Route path="/create" component={AddExpensePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
    );
}


export default AppRouter;