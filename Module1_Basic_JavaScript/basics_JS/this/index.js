function hello() {
  console.log('Hello', this)
}

// hello()

const person = {
  name: 'Egor',
  age: 14,
  sayHello: hello,
  // sayHelloWindow: hello.bind(window),
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is: ${this.name}`)
    console.log(`Age is: ${this.age}`)
    console.log(`Job is: ${job}`)
    console.log(`Phone is: ${phone}`)
    console.groupEnd()
  },
}

// person.sayHelloWindow()
// console.log(this)
// console.log(this === window)

person.sayHelloWindow()
person.logInfo()

const lena = {
  name: 'Elena',
  age: 23,
}

//! bind
person.logInfo.bind(lena, 'Student', '+375296666666')() // вызывает новую функцию
// const fnLenaInfoLog = person.logInfo.bind(lena, 'Student', '+375296666666') // вызывает новую функцию
// fnLenaInfoLog()
//! Demo реализация метода bind
function info(phone, email) {
  console.log(`Name: ${this.name}`)
  console.log(`Phone: ${phone}`)
  console.log(`Email: ${email}`)
}
// const bound = info.bind(person)
// bound()
// info.bind(person)('+375297777777', 'v@mail.ru')
// info.bind(person, '+375297777777')('v@mail.ru')
// info.bind(person, '+375297777777', 'v@mail.ru')()
//! 1). реализация метода bind (простой - со встроенными методами)
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest)
// }
//! 2). реализация метода bind (без встроенных методов)
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     const uniqId = Date.now().toString()
//     context[uniqId] = fn
//     const result = context[uniqId](...rest.concat(args))
//     delete context[uniqId]
//     return result
//   }
// }
//! 3). реализация метода bind (ES5)
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2)
//   return function () {
//     const args = Array.prototype.slice.call(arguments)
//     return fn.apply(context, rest.concat(args))
//   }
// }

//! 4). реализация метода bind (ES6)
function bind(fn, context, ...rest) {
  return function (...args) {
    return fn.apply(context, rest.concat(args))
    // return fn.call(context, ...rest.concat(args))
  }
}

bind(info, person)('+375297777777', 'v@mail.ru****************')
bind(info, person, '+375297777777')('v@mail.ru****************')
bind(info, person, '+375297777777', 'v@mail.ru****************')()

//! call
person.logInfo.call(lena, 'Frontend', '+375290000000') // сразу же вызывает функцию в которую передаются параметры
//! Реализация метода call
function call(fn, context, ...args) {
  const uniqId = Date.now().toString()
  context[uniqId] = fn
  const result = context[uniqId](...args)
  delete context[uniqId]
  return result
}

call(info, person, '+375297777777', 'v@mail.ru****************')

//! apply
person.logInfo.apply(lena, ['Student', '+375296666666']) // сразу же вызывает функцию в которую передаются параметры
//! Реализация метода apply
function apply(fn, context, args) {
  const uniqId = Date.now().toString()
  context[uniqId] = fn
  const result = context[uniqId](...args)
  delete context[uniqId]
  return result
}

apply(info, person, ['+375297777777', 'v@mail.ru****************'])

// ------------------------------------------------- //
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//   const newArr = arr.map((num) => num * n)
//   return newArr
// }

Array.prototype.multBy = function (n) {
  return this.map((num) => num * n)
}

console.log(array.multBy(10))
Array([1, 2, 3, 4, 5].multBy(10))
