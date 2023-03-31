// Операторы сравнения > < >= <= == ===
console.log(5 > 10)
console.log(5 < 10)
console.log(5 <= 5)
console.log(5 >= 6)

console.log('==', 100 == '100')
console.log('===', 100 === '100')

// Сравнение строк
console.log('JavaScript' == 'Javascript')
console.log('JavaScript' < 'Javascript')
console.log('S', 'S'.charCodeAt())
console.log('s', 's'.charCodeAt())

console.log('javaScript' > 'JavaScript')
console.log('J', 'J'.charCodeAt())
console.log('j', 'j'.charCodeAt())
// console.log(String.fromCharCode(77)) // M

// == vs ===
// == сравнивает значения
// === сравнивает типы
console.log('1' == 1)
console.log('1' >= 1)
console.log('1' === 1)
console.log('200' > '21') // false

console.log(true == 1) // true
console.log(false == 0) // true
console.log(true === 1) // false
console.log(false === 0) // false
console.log('1' === 1) // false
