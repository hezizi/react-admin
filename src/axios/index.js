import Jsonp from 'jsonp'

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(options.url, {
        param: 'callback'
      }, (err, res) => {
        if (res.status === '1') {
          resolve(res)
        } else {
          reject(res.info)
        }
      })
    })
  }
}