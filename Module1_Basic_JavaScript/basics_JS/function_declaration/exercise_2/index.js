function getSumOfNumbers(number, type = 'odd') {
  if (number && Number(number) === number) {
    let sum = []
    for (let i = 0; i <= number; i += 1) {
      sum.push(i)
    }
    if (type === 'odd') {
      const sumOdd = sum.filter((num) => !(num % 2 === 0))
      // console.log(sumOdd)
      return sumOdd.reduce((acc, num) => (num += acc), 0)
    } else if (type === 'even') {
      const sumEven = sum.filter((num) => num % 2 === 0)
      // console.log(sumEven)
      return sumEven.reduce((acc, num) => (num += acc), 0)
    } else if (type === '') {
      // console.log(sum)
      return sum.reduce((acc, num) => (num += acc), 0)
    } else {
      return NaN
    }
  } else {
    return NaN
  }
}

console.log(getSumOfNumbers(10))
console.log(getSumOfNumbers(10, 'odd'))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))
console.log(getSumOfNumbers())
console.log(getSumOfNumbers('10'))
console.log(getSumOfNumbers(true))
