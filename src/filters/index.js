import moment from 'moment'
moment.locale('zh-cn')

export default {
  format (timeStr, type = 'h:mm:ss') {
    return moment(timeStr).format(type)
  }
}
