import React from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';

import ExpenseDashboardPage from '../components/expense-dashboard-page';
import AddExpensePage from '../components/add-expense-page';
import EditExpensePage from '../components/edit-expense-page';
import HelpPage from '../components/help-page';
import NotFoundPage from '../components/not-found-page';
// import Header from '../components/header';
import LoginPage from '../components/login-page';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

const AppRouter = () => {
    return (
            <Router history={history}>
                <div>
                    {/* <Header /> */}
                    <Switch>
                        <PublicRoute path="/" component={LoginPage} exact={true}/>
                        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}  />
                        <PrivateRoute path="/create" component={AddExpensePage} />
                        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                        
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
    );
}

const AppRouterOLD = () => {
    return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={LoginPage} exact={true}/>
                        <Route path="/dashboard" component={ExpenseDashboardPage} />
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