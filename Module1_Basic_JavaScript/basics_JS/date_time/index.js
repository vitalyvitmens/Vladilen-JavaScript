//! Date
const date = new Date()
console.log('date:', date)

// new Date(year, month, date, hours, minutes, seconds, ms)
// 0 (январь) до 11 (декабрь)
const newDate = new Date(1977, 8, 7, 4, 55, 7, 7)
console.log('newDate:', newDate)

console.log('year:', newDate.getFullYear())
console.log('month:', newDate.getMonth())
console.log('date:', newDate.getDate())
console.log('hours:', newDate.getHours())
console.log('minutes:', newDate.getMinutes())
console.log('seconds:', newDate.getSeconds())
console.log('ms:', newDate.getMilliseconds())

//! День недели
// 0 (воскресенье) - 6 (суббота)
console.log('day:', newDate.getDay())
if (newDate.getDay() === 3) {
  console.log('День недели: среда')
}

newDate.setFullYear(1982) // изменить год
newDate.setMonth(6) // изменить месяц
newDate.setDate(23) // изменить дату
newDate.setHours(0) // изменить часы
newDate.setMinutes(0) // изменить минуты
newDate.setSeconds(0) // изменить секунды
newDate.setMilliseconds(0) // изменить миллисекунды
console.log('newDate:', newDate)
console.log('year:', newDate.getFullYear())
console.log('month:', newDate.getMonth())
console.log('date:', newDate.getDate())
console.log('hours:', newDate.getHours())
console.log('minutes:', newDate.getMinutes())
console.log('seconds:', newDate.getSeconds())
console.log('ms:', newDate.getMilliseconds())
