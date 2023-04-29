function luckyNumber(minInt, maxInt) {
  const numbers = []

  for (i = Number(minInt); i <= Number(maxInt); i += 1) {
    numbers.push(i)
  }

  return Math.max(
    ...numbers.filter(
      (i) => i % 3 === 0 && i % 7 === 0 && !(i % 5 === 0) && !(i % 2 === 0)
    )
  )
}

console.log(luckyNumber('1016', 1937))
