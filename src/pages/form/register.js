import React, { Component } from 'react'

import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  message,
  InputNumber
} from 'antd'
import moment from 'moment'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FormRegister extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    return (
      <div className="">
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空'
                    }
                  ]
                })(<Input placeholder="请输入密码" />)
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '男'
                })(
                  <RadioGroup>
                    <Radio value="男">男</Radio>
                    <Radio value="女">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(<InputNumber />)
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '1'
                })(
                  <Select>
                    <Option value="1">垃圾前端一枚</Option>
                    <Option value="2">努力者</Option>
                    <Option value="3">梦想者</Option>
                    <Option value="4">高级前端</Option>
                    <Option value="5">全栈，月薪30K</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('hobbit', {
                  initialValue: ['1', '2']
                })(
                  <Select mode="multiple">
                    <Option value="1">撸码</Option>
                    <Option value="2">篮球</Option>
                    <Option value="3">跳舞</Option>
                    <Option value="4">唱歌</Option>
                    <Option value="5">旅游</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: false
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('1994-10-28')
                })(
                  <DatePicker />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '湖北省武汉市江夏区'
                })(
                  <DatePicker />
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormRegister)
