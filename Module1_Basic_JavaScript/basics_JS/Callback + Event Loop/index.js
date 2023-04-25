// //! callback - это функция, которая передается как параметр внутрь дургой функции () => {} (пример Promise или setTimeout)
// const promise = new Promise(() => {})
// setTimeout(() => {}, 3000)

// const FIRST_TOTO_URL = `https://jsonplaceholder.typicode.com/todos/1`

// const getTodo = (callback) => {
//   fetch(FIRST_TOTO_URL)
//     .then((response) => response.json())
//     .then((todo) => {
//       // console.log(`todo`, todo)
//       callback(todo)
//     })
//     .catch((error) => {
//       console.log(`error`, error)
//     })
// }
// // проблема calback - с ним код растёт вправо
// getTodo((todoItem) => {
//   console.log(`todoItem`, todoItem)
//   getTodo((todoItem) => {
//     console.log(`todoItem`, todoItem)
//     getTodo((todoItem) => {
//       console.log(`todoItem`, todoItem)
//     })
//   })
// })

// // проблема calback помогают решить Promise
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// wait(1000)
//   .then(() => wait(1000))
//   .then(() => wait(1000))
//   .then(() => wait(1000))
//   .then(() => console.log('Hello World!'))

// //! без callback
// function firstFunc() {
//   setTimeout(() => {
//     console.log('Hello')
//   }, 500)
// }

// function secondFunc() {
//   console.log('World')
// }

// firstFunc()
// secondFunc()

// // Вывод:
// // Hello
// // World

// //! Принимаем коллбэк ourCallback
// function firstFunc1(ourCallback) {
//   setTimeout(() => {
//     console.log('Hello')
//     ourCallback() // Вызываем коллбэк в нужный момент
//   }, 500)
// }

// function secondFunc2() {
//   console.log('World')
// }

// // Передаем secondFunc2 в качестве коллбэка
// firstFunc1(secondFunc2)

// // Вывод:
// // Hello
// // World

// //! Event Loop (событийный цикл) JavaScript является синхронным и однопоточным
// // Call Stack (стек вызовов) – одна из составляющих Event Loop
// // Callback queue (очередь задач) – это следующая составляющая Event Loop
// // microtasks queue (очередь микрозадач к ним относятся: then, catch, finally)
// // Порядлк выполнения:
// // 1. Выполняется мАкрозадача (выполнение скрипта - наш код от начала до конца)
// // 2. Вызывается всё, что есть в очереди мИкрозадач
// // 3. Вызывается всё, что есть в очереди вызовов
// function sayHello(name) {
//   console.log(`Hello, ${name}`)
// }

// console.log(`Start`)
// setTimeout(() => {
//   sayHello(`Egor`)
// }, 0)
// sayHello(`Vitaly`)
// sayHello(`Richi`)
// console.log(`End`)

// //! microtasks queue (очередь микрозадач к ним относятся: then, catch, finally)
// console.log(`Давайте начинать`)

// setTimeout(() => {
//   console.log(`Привет! Я из setTimeout!`)
// }, 1000)

// const promise2 = new Promise((resolve) => {
//   console.log(`Я в промисе`)
//   resolve(`Возвращаю результат из промиса`)
// })

// setTimeout(() => {
//   console.log(`Я тоже в setTimeout, только жду подольше`)
// }, 2000)

// promise2.then((result) => {
//   console.log(result)
// })

// console.log(`Давайте заканчивать`)

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0)
// const promise = new Promise((resolve) => {
//   console.log('Promise')
//   resolve()
// })
// promise.then(() => {
//   console.log('Promise resolve')
// })
// console.log('End')
// Promise
// End
// Promise resolve
// setTimeout

function runCode() {
  console.log('before promise')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Zero Promise')
      resolve()
    }, 0)
  })
}
setTimeout(() => {
  console.log('Zero')
}, 0)
runCode().then(() => console.log('Zero Promise Invoked'))
console.log('One')
// before promise
// One
// Zero
// Zero Promise
// Zero Promise Invoked

const getData = (callback) => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((user) => {
      console.log('Success')
      callback(user)
    })
    .catch((error) => {
      console.log(error)
    })
}
getData(() => {
  console.log('user received')
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('promise resolved')
    }, 500)
    console.log('in promise')
    setTimeout(() => {
      console.log('last set timeout')
    }, 400)
  })
  promise.then((result) => {
    console.log(result)
  })
})
console.log('End')
// End
// Success
// user received
// in promise
// last set timeout
// promise resolved