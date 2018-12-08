import React, { Component } from 'react'

import { Card, Spin, Icon, Alert } from 'antd'

import './ui.less'

class Loadings extends Component {
  constructor(props) {
    super();
  }
  render() {
    const icon = <Icon type="plus" spin style={{marginLeft: 20}}/>
    return (
      <div className="">
        <Card title="Spin使用">
          <Spin size="small" />
          <Spin style={{margin: '0 20px'}}/>
          <Spin size="large" />
          <Spin indicator={icon} size="large" />
        </Card>
        <Card title="Spin使用">
          <Alert
            message="Alert message title"
            description="学习react"
            type="info"
          />
          <Spin tip="加载中...">
            <Alert
              message="Alert message title"
              description="学习react"
              type="success"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loadings