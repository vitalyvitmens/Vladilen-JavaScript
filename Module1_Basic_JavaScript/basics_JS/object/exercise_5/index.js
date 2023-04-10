function sum2(...numbers) {
  let result = 0
  for (const num of numbers) {
    result += num
  }
  return result
}

console.log(sum2(1, 2, 3)) 
console.log(sum2(2, 2)) 
console.log(sum2(10, 15, 249, 653, 846)) 
