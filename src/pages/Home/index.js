import React, { Component } from 'react'

import RouterDemo2 from '../router-demo/demo2/index'
import './index.less'

class HomeIndex extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="home-wrapper df-aic df-jcc">
        <p>学习react 欢迎来到react-antd后台管理系统</p>
        <RouterDemo2 />
      </div>
    );
  }
}

export default HomeIndex