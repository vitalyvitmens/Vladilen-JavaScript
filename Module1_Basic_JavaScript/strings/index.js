// TODO: Strings in JavaScript
const name1 = 'Maxim'
const name2 = "I'gor"
const name3 = `Mike`

console.log(name1)
console.log(name2)
console.log(name3)

// Конкатенация
const name = 'Vitaly'
const job = 'JavaScript developer'
// const allInfo = name + ' ' + job
// const allInfo = `${name} ${job}`
let allInfo = name + ' '
allInfo += job
console.log('allInfo', allInfo)

// length
const programmingLanguage = 'JavaScript'
console.log(programmingLanguage.length)
console.log(programmingLanguage[0])
console.log(programmingLanguage[4])
console.log(programmingLanguage[100])

programmingLanguage[0] = 'j'
console.log('programmingLanguage', programmingLanguage)
