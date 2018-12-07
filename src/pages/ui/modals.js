import React, { Component } from 'react'

import { Card, Button, Modal } from 'antd'

import './ui.less'

class Modals extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    }
  }

  showModal = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: 'Confirm',
      content: '确定申请吗',
      okText: '确认',
      cancelText: '取消',
    });
  }

  render() {
    return (
      <div className="">
        <Card title="基础模态框">
          <Button type="primary" onClick={() => this.showModal('showModal1')}>Open Modal</Button>
          <Button type="primary" onClick={() => this.showModal('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.showModal('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.showModal('showModal4')}>水平垂直居中</Button>
          <Modal
            title="基础模态框"
            visible={this.state.showModal1}
            onOk={() => {
              this.setState({
                showModal1: false
              })
            }}
            onCancel={() => {
              this.setState({
                showModal1: false
              })
            }}
          >
            <p>学习react</p>
          </Modal>
          <Modal
            title="基础模态框"
            visible={this.state.showModal2}
            okText="好的"
            cancelText="算了"
            onOk={() => {
              this.setState({
                showModal2: false
              })
            }}
            onCancel={() => {
              this.setState({
                showModal2: false
              })
            }}
          >
            <p>学习react</p>
          </Modal>
          <Modal
            title="基础模态框"
            visible={this.state.showModal3}
            style={{ top: '20px' }}
            okText="好的"
            cancelText="算了"
            onOk={() => {
              this.setState({
                showModal3: false
              })
            }}
            onCancel={() => {
              this.setState({
                showModal3: false
              })
            }}
          >
            <p>学习react</p>
          </Modal>
          <Modal
            title="基础模态框"
            visible={this.state.showModal4}
            centered
            okText="好的"
            cancelText="算了"
            onOk={() => {
              this.setState({
                showModal4: false
              })
            }}
            onCancel={() => {
              this.setState({
                showModal4: false
              })
            }}
          >
            <p>学习react</p>
          </Modal>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="dashed" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="danger" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
      </div>
    );
  }
}

export default Modals