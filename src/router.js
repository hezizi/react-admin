import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from './App'
import Admin from './Admin'
import Login from './pages/login/index'
import Button from './pages/ui/button'

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
                <Route path='/admin/ui/button' component={Button} />
              </Admin>
            )} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default Router