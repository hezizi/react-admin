import React, { Component } from 'react'

import { Card, Button, Table, Form, Select, Modal, message } from 'antd'

import axios from './../../axios/index'
import Utils from './../../utils/utils'

const FormItem = Form.Item;
const Option = Select.Option;

class City extends Component {
  params = {
    page: 1
  }

  constructor(props) {
    super();
    this.state = {
      cityList: []
    }
  }

  componentDidMount() {
    this.requestList();
  }

  // 接口数据
  requestList = () => {
    let _this = this;
    axios.ajax({
      url: '/open_city',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then(res => {
      console.log(res);
      let list = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      });
      console.log(list)

      this.setState({
        cityList: res.result.item_list,
        pagination: Utils.pagination(res, (current) => {
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }

  render() {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode) {
          return mode == 1 ? '停车点' : '禁停区';
        }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode == 1 ? '自营' : '加盟';
        }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr) {
          return arr.map((item) => {
            return item.user_name;
          }).join(',');
        }
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time'
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
        // render: Utils.formateDate
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ];

    const { cityList } = this.state;

    return (
      <div className="">
        <Card title="城市">
          <Table
            bordered
            columns={columns}
            dataSource={cityList}
          />
        </Card>
      </div>
    );
  }
}

export default City