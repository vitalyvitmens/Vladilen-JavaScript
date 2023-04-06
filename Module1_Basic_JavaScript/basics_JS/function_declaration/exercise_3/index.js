function getDivisorsCount(number) {
  if (number && Number(number) === number) {
    if (number < 0 || !Number.isInteger(number)) {
      alert(`number = ${number}, должен быть целым числом и больше нуля!`)
      return NaN
    } else {
      let numArr = []
      for (let i = 1; i <= number; i += 1) {
        if (number % i === 0) {
          numArr.push(i)
        }
      }
      return `${numArr.length} (делители - ${numArr})`
    }
  } else {
    return NaN
  }
}

console.log(getDivisorsCount(4))
console.log(getDivisorsCount(5))
console.log(getDivisorsCount(12))
console.log(getDivisorsCount(30))

console.log(getDivisorsCount())
console.log(getDivisorsCount('30'))
console.log(getDivisorsCount(true))
console.log(getDivisorsCount(3.3))
console.log(getDivisorsCount(-30))
