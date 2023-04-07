//! Деструктуризация массивов
function calcValues(a, b) {
  return [a + b, a - b, a * b, undefined, a / b]
}
// const result = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// console.log(sum, sub)

//! Запись равносильная записи выше
// const [sum, sub] = calcValues(42, 10)
// console.log(sum, sub)

// const [sum, , mult, mod = 'деления % по модулю нет', ...other] = calcValues(42, 10)
// console.log(sum, mult, mod, other)

//! Деструктуризация объектов
const person = {
  name: 'Max',
  age: 20,
  // job: 'FrontEnd',
  address: {
    coutry: 'Russia',
    city: 'Moscow',
  },
}

// // const name = person.name
// const {
//   name: firstName = 'Без имени',
//   age,
//   car = 'Машины нет',
//   address: { city: homeTown, coutry },
// } = person
// console.log(firstName, age, car, homeTown, coutry)

// const { name, ...info } = person
// console.log(name, info)

// function logPerson(per) {
//   console.log(`${per.name} (${per.age})`)
// }
// logPerson(person)
//! Код с функцией logPerson выше через деструктуризацию
// function logPerson({name: firstName = 'Нет имени', age, job: working = 'Нет работы'}) {
//   console.log(`${firstName} (${age}) ${working}`)
// }
// logPerson(person)
