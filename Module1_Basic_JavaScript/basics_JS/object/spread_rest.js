const citiesRussia = ['Москва', 'Санкт-Петеребург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20, // у одинаковых ключей применится значение последнего
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
}
const citiesEuropeWithPopulation = {
  Moscow: 26, // у одинаковых ключей применится значение последнего
  Berlin: 10,
  Praha: 3,
  Paris: 2,
}

//! Spread
console.log(citiesRussia)
console.log(...citiesRussia)

console.log(citiesEurope)
console.log(...citiesEurope)

const allCities = [
  ...citiesRussia,
  'Вашингтон',
  'Нью-Йорк',
  'Токио',
  ...citiesEurope,
]
console.log(allCities)
console.log(...allCities)

console.log({ ...citiesRussiaWithPopulation })
console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation }) // у одинаковых ключей применится значение последнего 26
console.log({ ...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation }) // у одинаковых ключей применится значение последнего 20

const numbers = [5, 37, 42, 17]
console.log(Math.max(...numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(nodes)
console.log(divs, Array.isArray(divs)) // false (является ли divs массивом?)
console.log(nodes, Array.isArray(nodes)) //true (является ли nodes массивом?)

//! Rest (отличие от Spread область применения. Rest - собирает все оставшиеся параметры в массив или объект)
function sum(a, b, ...rest) {
  return a + b + rest.reduce((acc, num) => (acc += num), 0)
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sum(...numbers2))

// const a = numbers2[0]
// const b = numbers2[1]
const [a, b, ...other] = numbers2
console.log(a, b, other)

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia',
}

const { name, age, ...address } = person
console.log(name, age, address)
