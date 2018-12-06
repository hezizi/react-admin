import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.children)
    return (
      <div className="">
        {this.props.children}
      </div>
    );
  }
}

export default App