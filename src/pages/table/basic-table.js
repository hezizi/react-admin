import React, { Component } from 'react'

import { Card, Table } from 'antd'
import axios from '../../axios/index'

class BasicTable extends Component {
  params = {
    page:1
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

  /* 动态数据渲染表格-Mock */
  // 动态获取mock数据
  // dataRequest = () => {
  //   const baseUrl = 'https://www.easy-mock.com/mock/5c0e5bb5dbf7436640a68ddf/mockapi';
  //   axios.get(`${baseUrl}/table/list`)
  //     .then(res => {
  //       if (res.status === 200 && res.data.code === 0) {
  //         this.setState({
  //           dataSourceAjax: res.data.result
  //         })
  //       }
  //     })
  // }

  dataRequest = () => {
    axios.ajax({
      url: '/table/list',
      data: {
        params:{
          page:this.params.page
        }
      }
    }).then(res => {
      this.setState({
        dataSourceAjax: res
      })
    })
  }

  render() {
    /* 基础表格 */ 
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record, index) => {
          // console.log(text, record, index);
          return <a href='javascript: ;'>{text}</a>
        }
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const dataSource = [
      {
        key: '0',
        id: '0',
        name: 'yuci',
        age: 24,
        address: '武汉'
      },
      {
        key: '1',
        id: '1',
        name: 'yosi',
        age: 18,
        address: '北京'
      },
      {
        key: '2',
        id: '2',
        name: 'yucihent',
        age: 20,
        address: '深圳'
      },
      {
        key: '3',
        id: '3',
        name: 'hezizi',
        age: 22,
        address: '上海'
      },
    ];

    
    // 动态数据渲染表格-Mock
    const columns2 = [{
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
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
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ];

    const { dataSourceAjax } = this.state;
    return (
      <div className="">
        <Card title="基础表格">
          <Table 
            columns={columns} 
            dataSource={dataSource}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格-Mock">
          <Table 
            columns={columns2}
            dataSource={dataSourceAjax}
            bordered
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}

export default BasicTable