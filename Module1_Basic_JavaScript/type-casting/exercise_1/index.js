const myName = 'Vitaly'
console.log(Number(myName), Boolean(myName), String(myName))

let age = 45
console.log(Number(age), Boolean(age), String(age))

let isProgrammer = true
console.log(Number(isProgrammer), Boolean(isProgrammer), String(isProgrammer))

let carOwner = undefined
console.log(Number(carOwner), Boolean(carOwner), String(carOwner))

let favoriteCar = null
console.log(Number(favoriteCar), Boolean(favoriteCar), String(favoriteCar))

const obj = {
  job: 'roof',
  salary: 1000,
}
console.log(Number(obj), Boolean(obj), String(obj))

let bigInt = BigInt(10)
console.log(Number(bigInt), Boolean(bigInt), String(bigInt))

const id = Symbol('id')
console.log(Number(id[0]), Boolean(id), String(id))
