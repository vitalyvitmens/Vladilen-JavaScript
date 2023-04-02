// Замыкания closures
const createMultiplyer = function (n) {
  return function () {
    return n * 10
  }
}

const multiply2 = createMultiplyer(5)
const result = multiply2()
console.log(result)

const createCounter = (initialValue = 0) => {
  return (valueToAdd) => {
    return initialValue + valueToAdd
  }
}

const addFive2 = createCounter(5)
const result9 = addFive2(10)
console.log(result9)

const addTen = createCounter(10)
console.log(addTen(90))

const createCounterNew = (initialValue = 0) => {
  let counter = initialValue
  return (valueToAdd) => {
    counter += valueToAdd
    return counter
  }
}

const addTwo = createCounterNew(2)
console.log(addTwo(40)) // 42
console.log(addTwo(40)) // 82
