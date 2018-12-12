import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from './app'
import Admin from './admin'
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notifications from './pages/ui/notifications'
import Messages from './pages/ui/messages'
import Tab from './pages/ui/tabs'
import Carousels from './pages/ui/carousels'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basic-table'
import HighTable from './pages/table/high-table'
import City from './pages/city/index'
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
                <Route path='/admin/ui/loadings' component={Loadings} />
                <Route path='/admin/ui/notifications' component={Notifications} />
                <Route path='/admin/ui/messages' component={Messages} />
                <Route path='/admin/ui/tabs' component={Tab} />
                <Route path='/admin/ui/carousels' component={Carousels} />
                <Route path='/admin/form/login' component={FormLogin} />
                <Route path='/admin/form/register' component={FormRegister} />
                <Route path='/admin/table/basic' component={BasicTable} />
                <Route path='/admin/table/high' component={HighTable} />
                <Route path='/admin/city' component={City} />
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