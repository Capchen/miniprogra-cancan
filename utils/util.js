import processor from './processor.js'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 登录态检查 
const loginCheck = () => {
  return new Promise((resolve, reject) => {
    // 登录态判断，如果没有token就跳转到登录页
    const token = processor.get('token')
    if (!token) {
      reject()
      return
    }
    resolve()
  })
}

module.exports = {
  formatTime,
  loginCheck
}
