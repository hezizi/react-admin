import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from './App'
import Admin from './Admin'
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch/index'

class Router extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/admin' render={() => (
              <Admin>
                <Route path='/admin/ui/buttons' component={Buttons} />
              </Admin>
            )} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default Router