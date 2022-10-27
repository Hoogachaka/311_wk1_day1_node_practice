const isEven = (num) => {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const sum = (arr) => {
  let arrSum = arr.reduce(
    (a, b) => a + b);
    return arrSum
}

const comboSum = (arr, sum) => {
  let arrSum = arr.reduce(
    (a, b) => a + b);
  if (arrSum == sum) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}