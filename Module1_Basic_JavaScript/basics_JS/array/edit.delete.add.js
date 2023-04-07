const salariesOfDevelopers = [400, 500, 600, 2000, 350]

//! Добавление элементов
const newSeniorDeveloperSalary = 5000
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002) // добавить в конец массива
salariesOfDevelopers.unshift(77, 777, 7777) // добавить в начало массива
//! Удаление элементов
const firstRemovedElement = salariesOfDevelopers.shift() // удалить данные в начале массива
const lastRemovedElement = salariesOfDevelopers.pop() // удалить данные в конце массива

console.log(salariesOfDevelopers)
console.log(firstRemovedElement)
console.log(lastRemovedElement)

//! Изменение элементов
salariesOfDevelopers[4] = 6000
console.log(salariesOfDevelopers)
console.log(salariesOfDevelopers.length)
console.log('lastIndexArray:', salariesOfDevelopers.at(-1))

console.log(salariesOfDevelopers.length = 3000)
console.log(salariesOfDevelopers.length)
console.log(salariesOfDevelopers)
console.log('firstIndexArray:', salariesOfDevelopers.at(0))
console.log(salariesOfDevelopers.at(290))
