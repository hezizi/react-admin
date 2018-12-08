import React, { Component } from 'react'

import { Card, message, Tabs, Icon } from 'antd'

import './ui.less'

const TabPane = Tabs.TabPane;

class Tab extends Component {
  constructor(props) {
    super();
  }

  callback = (key) => {
    message.info(`你点击的当前标签页是${key}`)
  }

  render() {
    return (
      <div className="">
        <Card title="基本Tabs">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>

        <Card title="图标Tabs">
          <Tabs defaultActiveKey="1" onChange={this.callback} type="editable-card">
            <TabPane tab={<span><Icon type="ie" />Tab 1</span>} key="1">Ie</TabPane>
            <TabPane tab={<span><Icon type="github" />Tab 2</span>} key="2">Github</TabPane>
            <TabPane tab={<span><Icon type="chrome" />Tab 3</span>} key="3">Chrome</TabPane>
            <TabPane tab={<span><Icon type="windows" />Tab 4</span>} key="4">Windows</TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Tab