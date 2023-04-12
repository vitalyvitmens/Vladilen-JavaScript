function addDays(date, days) {
  return new Date(date.getTime() + days * 1000 * 60 * 60 * 24)
}

console.log(addDays(new Date(), 10))
console.log(addDays(new Date(1948, 4, 4), 10))
console.log(addDays(new Date(1977, 8, 7, 4, 55, 7, 7), 10))
console.log(addDays(new Date(1681283572491), -10))
