import React, { Component } from 'react'

import { Card, Table } from 'antd'
import axios from 'axios'

class BasicTable extends Component {
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
  dataRequest = () => {
    const baseUrl = 'https://www.easy-mock.com/mock/5c0e5bb5dbf7436640a68ddf/mockapi';
    axios.get(`${baseUrl}/table/list`)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.setState({
            dataSourceAjax: res.data.result
          })
        }
      })
  }

  render() {
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
          console.log(text, record, index);
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
    /* 基础表格 */ 
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
            columns={columns} 
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