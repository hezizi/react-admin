import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import RouterDemo2 from './index'
import Home from './home'
import About from './about'
import Detail from './detail'

class Router2 extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <HashRouter>
        <RouterDemo2>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/detail' component={Detail} />
        </RouterDemo2>
      </HashRouter>
    );
  }
}

export default Router2