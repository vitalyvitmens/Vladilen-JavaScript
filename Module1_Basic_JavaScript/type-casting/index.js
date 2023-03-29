// TODO: JS имеет динамическую типизацию
// Существует 3 вида приведения типов:
// 1. К Строке
const age = 20
console.log('number age:', typeof age)
console.log('string age:', typeof String(age)) // '20' - явное преобразование

const updatedAge = '1' + 20 // '120' - неявное преобразование
console.log('updatedAge:', typeof updatedAge)

// 2. К Числу
const experienceInJS = '5'
console.log('experienceInJS:', typeof experienceInJS)
console.log('number experienceInJS:', typeof Number(experienceInJS)) // 5 - явное преобразование

console.log('number experienceInJS:', typeof +experienceInJS) // 5 - неявное преобразование

console.log('Hello World:', Number('Hello World')) // NaN

// 3. К Boolean
console.log('hello:', Boolean('hello'))
console.log('1977:', Boolean(1977))
// к false приводятся: null, undefined, NaN, 0, -0, '', false
console.log('null:', Boolean(null))
console.log('undefined:', Boolean(undefined))
console.log('0:', Boolean(0))
console.log('-0:', Boolean(-0))
console.log('false:', Boolean(false))

// console.log(true + false) // 1
// console.log(12 / '6') // 2
// console.log('number' + 15 + 3) // number153
// console.log(15 + 3 + 'number') // 18number
// console.log([1] > null) // true
// console.log('foo' + +'bar') // fooNaN
// console.log('true' == true) // false
// console.log(false == 'false') // false
// console.log(null == '') // false
// console.log(!!'false' == !!'true') // true
// console.log(['x'] == 'x') // true
// console.log([] + null + 1) // null1
// console.log(0 || ('0' && {})) // {}
// console.log([1, 2, 3] == [1, 2, 3]) // false
// console.log({} + [] + {} + [1]) // [object Object][object Object]1
// console.log(!+[] + [] + ![]) // truefalse
// console.log(new Date(0) - 0) // 0
// console.log(new Date(0) + 0) // Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)0
