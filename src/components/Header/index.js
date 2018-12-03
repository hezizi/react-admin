import React, { Component } from 'react'

import { Row, Col } from 'antd'

import './index.less'
import Utils from '../../utils/utils'
import Axios from '../../axios/index'

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      userName: 'yucihent',
      sysTime: ''
    }
  }

  componentWillMount() {
    setInterval(() => {
      let sysTime = Utils.formateDate(new Date());
      this.setState({
        sysTime
      })
    }, 1000)
  }

  componentDidMount() {
    this.getWeatherApiData()
  }

  
  getWeatherApiData() {
    let city = '武汉'
    Axios.jsonp({
      url: `https://restapi.amap.com/v3/weather/weatherInfo?key=408bf4dd3a0c33618561511b3985e9ca&city=${encodeURIComponent(city)}`
    }).then((res) => {
      console.log(res)
    })
  }

  render() {
    const { userName, sysTime } = this.state;
    return (
      <div className="header">
        <Row className='header-top'>
          <Col span={24} className='header-top-col df-aic h100'>
            <span>欢迎，{userName}</span>
            <a href='#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb df-aic'>
          <Col span={4} className='breadcrumb-title'>
            首页
          </Col>
          <Col span={20} className='date ar'>
            <span className='date-detail'>{sysTime}</span>
            <span className='weather'>晴天</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header