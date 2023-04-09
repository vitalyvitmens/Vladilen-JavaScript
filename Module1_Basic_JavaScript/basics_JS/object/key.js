//! key (ключи в JavaScript могут быть двух типов: strig | symbol)
const user = {
  name: 'Maxim', // ключ name преобразуется в строку 'name'
  10: '1234', // ключ 10 преобразуется в строку '10'
  undefined: undefined, // ключ undefined преобразуется в строку 'undefined'
  [false]: false, // ключ [false] преобразуется в строку 'false'
}

console.log(Object.keys(user))

//! Symbol
const id = Symbol('id')
const id2 = Symbol('id')

const user2 = {
  [id]: 1,
  [Symbol('id')]: 2,
  [Symbol('id')]: 3,
  [Symbol('id')]: 4,
  name: 'Victor',
  name: 'Vitaly',
  name: 'Maxim', // применится последний из одинаковых ключей
}

console.log(user2)
console.log(user2[id])

const cars = {
  [Symbol('name')]: 'Toyota Corolla',
  [Symbol('name')]: 'Nissan Note',
}

const symbols = Object.getOwnPropertySymbols(cars)
for (const symbol of symbols) {
  console.log(`${symbol.description} - ${cars[symbol]}`)
}

//! in (проверяет существует ли какой то ключ в нашем объекте)
console.log('name' in user2)
console.log('programmingLanguage' in user2)
console.log(id in user2)
console.log(id2 in user2)
