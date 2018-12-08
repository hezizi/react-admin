import React, { Component } from 'react'

import { Card, message, Button} from 'antd'

import './ui.less'

class Messages extends Component {
  constructor(props) {
    super();
  }

  openMsg = type => {
    message[type]('react antd message')
  }

  render() {
    return (
      <div className="">
        <Card>
          <Button type="primary" onClick={() => this.openMsg('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openMsg('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openMsg('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openMsg('error')}>Error</Button>
        </Card>
      </div>
    );
  }
}

export default Messages