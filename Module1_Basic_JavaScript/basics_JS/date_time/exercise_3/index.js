function addDays(date, days) {
  return new Date(date.getTime() + days * 1000 * 60 * 60 * 24)
}

console.log(addDays(new Date(), 10))
console.log(addDays(new Date(1948, 4, 4), 10))
console.log(addDays(new Date(1977, 8, 7, 4, 55, 7, 7), 10))
console.log(addDays(new Date(1681283572491), -10))

//! Решение:
const convertDaysToMs = (days) => days * 24 * 3600 * 1000

const addDays2 = (date, days) => {
  if (!(date instanceof Date)) {
    return 'Первый параметр должен быть экземпляром класса Date!'
  }
  if (!days || typeof days !== 'number') return date

  return new Date(date.getTime() + convertDaysToMs(days))
}

const date = new Date()
console.log('before', date)
const newDate = addDays2(date, 5)
console.log('after', newDate)
