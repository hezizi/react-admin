import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom'

class RouterDemo2 extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props)
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/detail'>Detail</Link></li>
          </ul>
          {this.props.children}
        </div>
      </HashRouter>
    );
  }
}

export default RouterDemo2