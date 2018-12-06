import React, { Component } from 'react'

import { Card, Button } from 'antd'

import './ui.less'

class Buttons extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true
    }
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <div className="">
        <Card title="基础按钮">
          <Button type="primary">yucihent</Button>
          <Button>yucihent</Button>
          <Button type="dashed">yucihent</Button>
          <Button type="danger">yucihent</Button>
          <Button disabled>yucihent</Button>
        </Card>
        <Card title="图形按钮">
          <Button type="dashed" icon="plus">创建</Button>
          <Button type="dashed" icon="edit">编辑</Button>
          <Button type="primary" icon="delete">删除</Button>
          <Button type="danger" shape="circle" icon="search"></Button>
          <Button icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="dashed" loading={this.state.loading}>创建</Button>
          <Button type="dashed" loading={this.state.loading}>编辑</Button>
          <Button type="primary" loading={this.state.loading}>删除</Button>\
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons