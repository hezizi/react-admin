export default {
  formateDate(time) {
    if (!time) return;
    let getFullYear = time.getFullYear();
    let getMonth = time.getMonth();
    let getDate = time.getDate();
    let getHours = time.getHours();
    let getMinutes = time.getMinutes();
    let getSeconds = time.getSeconds();

    if (getHours < 10) {
      getHours = '0' + getHours;
    }
    if (getMinutes < 10) {
      getMinutes = '0' + getMinutes;
    }
    if (getSeconds < 10) {
      getSeconds = '0' + getSeconds;
    }
    return (
      `${getFullYear}-${getMonth + 1}-${getDate}  ${getHours}:${getMinutes}:${getSeconds}`
    )
  },

  pagination(data, callback) {
    let page = {
      onChange: (current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal: (total) => {
        return `一共${total}条数据`
      },
      showQuickJumper: true
    }
    return page
  }
}