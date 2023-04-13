function getDateFormat(date, separator = '.') {
  const newDate = new Date(date)

  const date2 = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  if (date2 < 10 && month < 10) {
    return `0${date2}${separator}0${month}${separator}${year}`
  } else if (date2 < 10 && month >= 10) {
    return `0${date2}${separator}${month}${separator}${year}`
  } else if (date2 >= 10 && month < 10) {
    return `${date2}${separator}0${month}${separator}${year}`
  } else {
    return `${date2}${separator}${month}${separator}${year}`
  }
}

console.log(getDateFormat(Date.now(), '-'))
console.log(getDateFormat(new Date(1948, 4, 4)))
console.log(getDateFormat(new Date(1955, 0, 10), '-'))
console.log(getDateFormat(new Date(1970, 0, 1)))
console.log(getDateFormat(new Date(2022, 11, 12)))

function fn(number) {
  if (number >= 10) {
    return `${number}`
  } else {
    return `0${number}`
  }
}

function getDateFormat2(date, separator = '.') {
  const newDate = new Date(date)

  const date2 = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  return `${fn(date2)}${separator}${fn(month)}${separator}${year}`
}

console.log(getDateFormat2(Date.now(), '-'))
console.log(getDateFormat2(new Date(1948, 4, 4)))
console.log(getDateFormat2(new Date(1955, 0, 10), '-'))
console.log(getDateFormat2(new Date(1970, 0, 1)))
console.log(getDateFormat2(new Date(2022, 11, 12)))

//! Решение:
const addZero = (num) => (String(num).length === 1 ? `0${num}` : String(num))

const getDateFormat3 = (date, separator = '.') => {
  if (!(date instanceof Date)) {
    return 'Первый параметр должен быть экземпляром класса Date!'
  }
  const dateItem = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return [dateItem, monthIndex + 1, year].map(addZero).join(separator)
}

console.log(getDateFormat3(new Date()))
