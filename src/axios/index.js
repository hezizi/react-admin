import Jsonp from 'jsonp'
import axios from 'axios'

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
    return new Promise((resolve, reject) => {

    })
  }
}