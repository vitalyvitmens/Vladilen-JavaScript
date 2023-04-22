// Promise.race([
//   new Promise(),
//   new Promise(),
//   new Promise(),
// ])

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(`promise1`)
  }, 500)
})
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(`promise2`)
  }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(`promise3`)
    reject(`promise3`)
  }, 100)
})

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(`result: ${result}`)
  })
  .catch((error) => {
    console.log(`error: ${error}`)
  })

// Promise.race().txt: Метод Promise.race() запускает несколько промисов, как и Promise.all(). Но возвращает он только один результат — того промиса, который выполнился быстрее всех.
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then(console.log) // Выведет 3
