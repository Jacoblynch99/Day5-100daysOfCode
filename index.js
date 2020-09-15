const _ = require("underscore")

const numArr = [53, 67, 97, 100, 81, 2, 25, 3]

const reduceArr = (a, b) => {
  return `${a} ${b}`
}

const findCondition = (num) => {
  return num % 3 === 0
}

const foundNum = _.find(numArr, findCondition) // this goes through aa array until the condition, which set by a function, is met, and only returns the first one that passes

const reversedStr = _.reduceRight(numArr, reduceArr) // like reduce except it starts from the right and goes left

console.log(reversedStr)
console.log(foundNum)
