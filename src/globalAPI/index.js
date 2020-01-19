import moment from 'moment'
import api from '../api'

const globalApi = [
  {
    name: '$moment',
    fun: moment
  },
  {
    name: '$api',
    fun: api
  }
]

export default function (Vue) {
  globalApi.forEach(({ name, fun }) => {
    Vue.prototype[name] = fun
  })
}
