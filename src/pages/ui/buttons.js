import React, { Component } from 'react'

import { Card, Button, Icon, Radio } from 'antd'

import './ui.less'

const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

class Buttons extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      size: 'default'
    }
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleChangeSize = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div className="">
        <Card title="基础按钮">
          <Button type="primary">yucihent</Button>
          <Button>yucihent</Button>
          <Button type="dashed">yucihent</Button>
          <Button type="danger" ghost>yucihent</Button>
          <Button disabled>yucihent</Button>
        </Card>
        <Card title="图形按钮">
          <Button type="dashed" icon="plus">创建</Button>
          <Button type="dashed" icon="edit">编辑</Button>
          <Button type="primary" icon="delete">删除</Button>
          <Button type="danger" shape="circle" icon="search" ghost></Button>
          <Button icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="dashed" loading={this.state.loading}>创建</Button>
          <Button type="dashed" loading={this.state.loading}>编辑</Button>
          <Button type="primary" loading={this.state.loading} ghost>删除</Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="组合按钮">
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <RadioGroup value={this.state.size} onChange={this.handleChangeSize}>
            <Radio value='large'>large</Radio>
            <Radio value="default">default</Radio>
            <Radio value="small">small</Radio>
          </RadioGroup>
          <Button type="dashed" size={this.state.size}>创建</Button>
          <Button type="primary" size={this.state.size}>编辑</Button>
          <Button type="dashed" size={this.state.size}>删除</Button>
          <Button type="primary" size={this.state.size}>关闭</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons