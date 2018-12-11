import Jsonp from 'jsonp'
import axios from 'axios'

import { Modal } from 'antd'

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(options.url, {
        param: 'callback'
      }, (err, res) => {
        if (err) return;
        if (res.status === '1') {
          resolve(res)
        } else {
          reject(res.info)
        }
      })
    })
  }

  static ajax(options) {
    let baseApi = 'https://www.easy-mock.com/mock/5c0e5bb5dbf7436640a68ddf/mockapi';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        params: (options.data && options.data.params) || ''
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          let res = response.data;
          if (res.code === 0) {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.msg
            })
          }
        } else {
          reject(response.data);
        }
      })
    })
  }
}