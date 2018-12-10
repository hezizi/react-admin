import React, { Component } from 'react'

import { Table } from 'antd'

class BasicTable extends Component {
  constructor(props) {
    super();
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
    const dataSource = [
      {
        key: '1',
        id: 1,
        name: 'yuci',
        age: 24,
        address: '武汉'
      },
      {
        key: '2',
        id: 2,
        name: 'yosi',
        age: 18,
        address: '北京'
      },
      {
        key: '3',
        id: 3,
        name: 'yucihent',
        age: 20,
        address: '深圳'
      },
      {
        key: '4',
        id: 4,
        name: 'hezizi',
        age: 22,
        address: '上海'
      },
    ]
    return (
      <div className="">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    );
  }
}

export default BasicTable