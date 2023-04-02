let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  num = numbers[i] ** 3
  debugger
  sum += num
  debugger
}
console.log(numbers) // [10, 4, 100, -5, 54, 2]
console.log(sum) // 1158411

// Через цикл for of
sum = 0
for (let num of numbers) {
  num = num ** 3
  sum += num
}
console.log(sum) // 1158411

// Через метод reduce
const res = numbers.reduce((acc, num) => acc + num ** 3, 0)
console.log(res) // 1158411
