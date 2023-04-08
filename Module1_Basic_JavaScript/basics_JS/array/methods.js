const people = [
  { name: 'Владилен', age: 25, budget: 40000 },
  { name: 'Елена', age: 17, budget: 3400 },
  { name: 'Игорь', age: 49, budget: 50000 },
  { name: 'Михаил', age: 15, budget: 1800 },
  { name: 'Василиса', age: 24, budget: 25000 },
  { name: 'Виктория', age: 38, budget: 2300 },
]

//! For
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

//! ForOf
// for (let person of people) {
//   console.log(person)
// }

//! ForEach (дословный перевод: для каждого элемента)
// people.forEach(function (person, index, peopleArray) {
//   console.log(person)
//   console.log(index)
//   console.log(peopleArray)
// })

// people.forEach((person) => console.log(person))

//! Map (используется для трансформации массивов)
// const newPeople = people.map((person) => person)
// console.log(newPeople)

// const newPeople2 = people.map((person) => 'Hello')
// console.log(newPeople2)

// const newPeople3 = people.map((person) => person.name)
// console.log(newPeople3)

// const newPeople4 = people.map((person) => person.age)
// console.log(newPeople4)

// const newPeople5 = people.map((person) => person.budget)
// console.log(newPeople5)

// const newPeople6 = people.map((person) => `${person.name} (${person.age})`)
// console.log(newPeople6)

// const newPeople7 = people.map((person) => person.age * 10)
// console.log(newPeople7)

//! Filter (для фильтрации массивов по какому то исходному условию)
// const adults = people.filter((person) => person.age >= 18)
// console.log(adults)

//! Reduce (для получения финального значения совершив итерацию по массиву)
// const amount = people.reduce((acc, person) => acc + person.budget, 0)
// console.log(amount)

// const fruitBasket = [
//   'banana',
//   'cherry',
//   'orange',
//   'apple',
//   'cherry',
//   'orange',
//   'apple',
//   'banana',
//   'cherry',
//   'orange',
//   'fig',
// ]
// const count = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1
//   return tally
// }, {})
// console.log(count)

// const euros = [29.76, 41.85, 46.5]
// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2)
//   return total
// }, [])
// console.log(doubled)

// const euro = [29.76, 41.85, 46.5]
// const above30 = euro.reduce((total, amount) => {
//   if (amount > 30) {
//     total.push(amount)
//   }
//   return total
// }, [])
// console.log(above30)

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// const flat = data.reduce((total, amount) => total.concat(amount), [])
// console.log(flat) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const data = [
//   { a: 'happy', b: 'robin', c: ['blue', 'green'] },
//   { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
//   { a: 'sad', b: 'goldfish', c: ['green', 'red'] },
// ]
// const colors = data.reduce((total, amount) => {
//   amount.c.forEach((color) => {
//     total.push(color)
//   })
//   return total
// }, [])
// console.log(colors) //['blue','green','green','black','orange','blue','green','red']

// // Если нам понадобятся только уникальные значения, то тогда нам надо будет проверить есть ли заданное значение в total, прежде чем отправлять его в этот массив.
// const uniqueColors = data.reduce((total, amount) => {
//   amount.c.forEach((color) => {
//     if (total.indexOf(color) === -1) {
//       total.push(color)
//     }
//   })
//   return total
// }, [])
// console.log(uniqueColors) // [ 'blue', 'red', 'green', 'black', 'orange']

//! Find (для нахождения в массиве по условию нужного нам элемента)
// const igor = people.find((person) => person.name === 'Игорь')
// console.log(igor)

//! FindIndex (работает так же как и метод Find но на выходе мы получаем индекс)
// const igorIndex = people.findIndex((person) => person.name === 'Игорь')
// console.log(igorIndex)

//! ПРАКТИКА:
//! Трансформация объектов массива (отфильтровать массив people у person которого бюджет больше 3000, затем изменить объекты массива на info и budget приведенный к 12 месяцам, затем проссумировать весь полученный годовой бюджет у person):
// const newPeople = people
//   .filter((person) => person.budget > 3000)
//   .map((person) => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget * 12,
//       // budget: Math.sqrt(person.budget),
//     }
//   })
//   .reduce((acc, person) => acc + person.budget, 0)
// console.log(newPeople)

//! splice (используется для обрезки массивов, изменяя текущий массив)
const cars = ['BMW', 'Mercedes', 'Lada']

const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti')
console.log('cars splice:', cars)
console.log('removedElements splice:', removedElements)

//! slice (используется для обрезки массивов, возвращает новый массив не изменяя текущий массив)
const agesOfDevelopers = [25, 18, 45, 30]
const sliceAgesOfDeveloper = agesOfDevelopers.slice(0, 2)
console.log('sliceAgesOfDeveloper', sliceAgesOfDeveloper)
console.log('agesOfDevelopers', agesOfDevelopers)

//! indexOf
const favoriteFood = ['Мороженое', 'Торт', 'Кофе']
const indexOfFood = favoriteFood.indexOf('Торт')
console.log('indexOfFood', indexOfFood)

//! includes
const technologies = ['JavaScript', 'HTML', 'CSS']
const isTechnologyExists = technologies.includes('JavaScript')
console.log('isTechnologyExists', isTechnologyExists)

//! split (разделяет строку с помощью разделителя и превращает эту строку в массив)
const listOfOrders = 'Майка, шорты, кроссовки, рюкзак'
const listOfOrdersArray = listOfOrders.split(', ')
console.log(listOfOrdersArray)
//! join (превращает массив в строку и вставляет перед каждым элементом преданный разделить)
const ordersString = listOfOrdersArray.join('; ')
console.log(ordersString)

//! reverse (изменяет текущий массив)
technologies.reverse()
console.log(technologies)
