const goodInfo = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes',
}
console.log('goodInfo', goodInfo)

//! for in
for (const key in goodInfo) {
  console.log('key:', key)
  console.log('value:', goodInfo[key])
  console.log(`${key}: ${goodInfo[key]}`)
}

//! Object.keys
const keys = Object.keys(goodInfo)
console.log(keys)

//! Object.values
const values = Object.values(goodInfo)
console.log(values)

//! Object.entries (объединяет в себя Object.keys и Object.values)
const entries = Object.entries(goodInfo)
console.log(entries)

//! Практика (получение ключей и значений объекта)
const car = {
  name: 'Toyota Corolla',
  year: 2017,
  isNew: false,
}
Object.entries(car).forEach(([key, value]) => console.log(`${key}: ${value}`))
