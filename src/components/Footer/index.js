import React, { Component } from 'react'

import './index.less'

class Footer extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="footer df-aic df-jcc">
        author: yucihent viewmore: <a href='http://yucihent.top'>yucihent.top</a>
      </div>
    );
  }
}

export default Footer