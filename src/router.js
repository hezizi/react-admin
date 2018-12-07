import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from './app'
import Admin from './admin'
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
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
                <Route path='/admin/ui/modals' component={Modals} />
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