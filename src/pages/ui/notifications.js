import React, { Component } from 'react'

import { Card, notification, Button} from 'antd'

import './ui.less'

class Notifications extends Component {
  constructor(props) {
    super();
  }

  openNotification = (type, direction) => {
    notification.config({
      placement: direction
    })
    notification[type]({
      message: 'Notification Title',
      description: 'react antd notification'
    })
  }

  render() {
    return (
      <div className="">
        <Card>
          <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>Error</Button>
        </Card>
      </div>
    );
  }
}

export default Notifications