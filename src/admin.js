import React, { Component } from 'react'

import { Row, Col } from 'antd'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'
import HomeIndex from './pages/home/index'
import './style/common.less'

class Admin extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Row className="container df">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main flex-1">
          <Header />
          <Row className="content">
            <HomeIndex />
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default Admin