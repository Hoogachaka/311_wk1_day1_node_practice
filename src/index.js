const numbers = require('./numbers')
const strings = require('./strings')
const dates = require('./dates')

const split = (string, delimiter) => {
  return string.split(`${delimiter}`)
}

module.exports = {
  numbers,
  strings,
  dates
}