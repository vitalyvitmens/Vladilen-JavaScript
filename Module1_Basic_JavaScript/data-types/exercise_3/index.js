let ageOfPerson1 = 18
let ageOfPerson2 = '20'

let nameOfAnimal1 = null
let nameOfAnimal2 = 'Charlie'

const bestProgrammingLanguage1 = 'JavaScript'
const bestProgrammingLanguage2 = 'Java'

let initialValue1
let initialValue2 = 0

let isJavaScriptProgrammer1 = true
let isJavaScriptProgrammer2 = false

let helloText1 = 'Hello!'
let helloText2 = 'Привет!'

// Решение Задание#3
ageOfPerson2 = ageOfPerson1
console.log(ageOfPerson2, typeof ageOfPerson2)

nameOfAnimal2 = nameOfAnimal1
console.log(nameOfAnimal2, typeof nameOfAnimal2)

initialValue2 = initialValue1
console.log(initialValue2, typeof initialValue2)

helloText2 = helloText1
console.log(helloText2, typeof helloText2)

console.log('var является устаревшим')
isJavaScriptProgrammer2 = isJavaScriptProgrammer1
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

console.log('Переменную с const переопределить нельзя')
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1)
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2)
