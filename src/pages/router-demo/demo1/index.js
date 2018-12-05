import React, { Component } from 'react'
import { HashRouter, Switch ,Route, Link } from 'react-router-dom'

import Home from './home'
import About from './about'
import Detail from './detail'

class RouterDemo1 extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="">
        <HashRouter>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/detail'>Detail</Link></li>
            </ul>

            {/* <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/detail' component={Detail} />
            </Switch> */}

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/detail' component={Detail} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default RouterDemo1