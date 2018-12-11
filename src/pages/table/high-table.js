import React, { Component } from 'react'

import { Card, Table, Modal, Button, message } from 'antd'

import axios from '../../axios/index'
import Utils from '../../utils/utils'

class HighTable extends Component {
  params = {
    page: 1
  }

  constructor(props) {
    super();
    this.state = {
      dataSourceAjax: []
    }
  }

  componentDidMount() {
    this.dataRequest();
  }

  dataRequest = () => {
    axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then(res => {
      if (res.code === 0) {
        this.setState({
          dataSourceAjax: res.result.list
        })
      }
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        key: 'id',
        width: 80,
        dataIndex: 'id',
        fixed: 'left'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName',
        fixed: 'left'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        width: 80,
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 120,
        dataIndex: 'address',
        fixed: 'right'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        dataIndex: 'time',
        fixed: 'right'
      }
    ];

    const { dataSourceAjax } = this.state;

    return (
      <div className="">
        <Card title="头部固定, 左侧固定">
          <Table
            bordered
            columns={columns}
            dataSource={dataSourceAjax}
            pagination={false}
            scroll={{ x: 1300, y: 380 }}
          />
        </Card>
      </div>
    );
  }
}

export default HighTable