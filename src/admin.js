import React, { Component } from 'react'

import { Row, Col } from 'antd'

class Admin extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Row>
        <Col span={3}>left</Col>
        <Col span={21}>right</Col>
      </Row>
    );
  }
}

export default Admin