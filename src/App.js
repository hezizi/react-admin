import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="">
        {this.props.children}
      </div>
    );
  }
}

export default App