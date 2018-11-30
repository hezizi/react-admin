import React, { Component } from 'react'

import { Row, Col } from 'antd'

import './index.less'

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      userName: 'yucihent'
    }
  }
  render() {
    const { userName } = this.state;
    return (
      <div className="header">
        <Row className='header-top'>
          <Col span={24} className='header-top-col df-aic h100'>
            <span>欢迎，{userName}</span>
            <a href='#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span={4} className='breadcrumb-title'>
            首页
          </Col>
          <Col span={20} className='date'>
            <span className='date-detail'>2018.11.30</span>
            <span className='weather'>晴天</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header