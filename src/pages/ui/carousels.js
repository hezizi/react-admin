import React, { Component } from 'react'

import { Card, Carousel } from 'antd'

import './ui.less'

class Carousels extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="">
        <Card title="Carousel轮播">
          <Carousel autoplay effect="scrollX">
            <div><h3>React</h3></div>
            <div><h3>Vue</h3></div>
            <div><h3>Angular</h3></div>
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default Carousels