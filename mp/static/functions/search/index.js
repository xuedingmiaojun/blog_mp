// 云函数入口文件
const got = require('got')

// 云函数入口函数
exports.main = async (event, context) => {
  let key = event.key || '产品'
  let res = await got('http://tiaocaoer.com:11171/blogs/search/' + key, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log(res.body)
  return res.body
}
