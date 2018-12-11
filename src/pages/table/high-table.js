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

  // 删除操作
  handleDelete = (item) => {
    console.log(item)
    let id = item.id;
    Modal.confirm({
      title: '删除提示',
      content: '您确认要删除此条数据吗？',
      onOk: () => {
        message.success('删除成功');
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

    const columns2 = [
      {
        title: 'id',
        key: 'id',
        width: 80,
        dataIndex: 'id'
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
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        dataIndex: 'time'
      },
      {
        title: '操作',
        width: 80,
        render: (item) => {
          return (
            <Button type="primary" size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
          )
        }
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
        <Card title="操作">
          <Table
            bordered
            columns={columns2}
            dataSource={dataSourceAjax}
            pagination={false}
            scroll={{ y: 380 }}
          />
        </Card>
      </div>
    );
  }
}

export default HighTable