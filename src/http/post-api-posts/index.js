// system imports
// 3rd party imports
const data = require('@begin/data')
const uuid = require('uuid/v4')
// local imports

const parse64 = (input) => {
  return Buffer.from(input, 'base64').toString()
}
exports.handler = async function http(req) {
  const post = JSON.parse(parse64(req.body))

  const table = 'posts'
  const key = uuid()

  let result = await data.set({
    table,
    key,
    post
  })

  return {
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(result),
  }
}