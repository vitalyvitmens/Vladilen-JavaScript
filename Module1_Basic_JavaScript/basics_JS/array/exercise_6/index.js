const numbers = [10, 4, 100, -5, 54, 2]

// for
let sumFor = 0
for (let i = 0; i < numbers.length; i += 1) {
  sumFor += numbers[i] ** 3
}
console.log('sumFor:', sumFor)

// for...of
let sumForOf = 0
for (let sum of numbers) {
  sumForOf += sum ** 3
}
console.log('sumForOf:', sumForOf)

// forEach
let sumForEach = 0
numbers.forEach((num) => (sumForEach += num ** 3))
console.log('sumForEach:', sumForEach)

// reduce
const sumReduce = numbers.reduce((acc, num) => (acc += num ** 3), 0)
console.log('sumReduce:', sumReduce)
