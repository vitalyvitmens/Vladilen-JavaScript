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
