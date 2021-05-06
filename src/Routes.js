import React from 'react'
import {Router,Switch,Route} from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Main from './Main';
import Logout from './Logout';

import history from './history';

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Landing}></Route>
                <Route path='/Login' component={Login}></Route>
                <Route path='/Main' component={Main}></Route>
                <Route path='/Logout' component={Logout}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;
