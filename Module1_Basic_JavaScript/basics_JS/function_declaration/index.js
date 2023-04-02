// Function Declaration: function name(...param) {тело функции}
// Function Declaration можем вызывать до определения функции
sayHello()

function sayHello() {
  console.log('Hello World!')
}

sayHello()
sayHello()
sayHello()

function sum(a = 1, b = 2) {
  console.log(a + b)
}

sum(5, 3)
sum(5)

function sum2(a, b, callback) {
  const result = a + b
  callback(result)
}

function displayer(res) {
  console.log('Результат', res)
}

sum2(3, 10, displayer)

function sum3(a, b, callback) {
  const result = a + b
  callback(result)
}

sum3(5, 10, function (res) {
  console.log('Результат', res)
})

sum2(7, 10, alert)
sum2(10, 10, console.log)

function sum4(a, b) {
  console.log('Hello World! 1') // код перед return выполнится
  return a + b
  console.log('Hello World! 2') // код после return не будет выполняться
}

const result4 = sum4(10, 20)
console.log(result4)
console.log(sum4(2, 3))

// Function Expression (Создаем переменную, затем присваиваем ей анонимную функцию, с параметрами в круглых скобках и тело функции с кодом)
// Function Expression не можем вызывать до определения функции
const sum5 = function (a, b) {
  console.log(a + b)
}
sum5(5, 10)

// arrow Function Expression const name = () => {}
const sum6 = (a, b) => {
  return a + b
}

const result6 = sum6(10, 11)
console.log('result6', result6)

const sum7 = (a, b) => a + b

const result7 = sum7(10, 11)
console.log('result7', result7)

const addFive = (a) => a + 5
console.log(addFive(10))

function multiply(a, b, callback) {
  const result8 = a * b
  callback(result8)
}

multiply(2, 5, (multiplyResult) => {
  console.log('multiplyResult', multiplyResult)
})
