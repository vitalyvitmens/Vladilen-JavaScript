//! Difference (подсчет разницы дат)
const date1 = new Date(1977, 8, 7)
const date2 = new Date(1982, 6, 23)

// Количество ms с Jan 1, 1970
console.log('date1', date1.getTime())
console.log('date2', date2.getTime())

const difference = date2.getTime() - date1.getTime()
console.log('difference ms', difference)
console.log('difference seconds', difference / 1000)
console.log('difference minutes', difference / 1000 / 60)
console.log('difference hours', difference / 1000 / 60 / 60)
console.log('difference days', Math.round(difference / 1000 / 60 / 60 / 24))
console.log(
  'difference months',
  Math.round(difference / 1000 / 60 / 60 / 24 / 30)
)
console.log(
  'difference years',
  Math.round(difference / 1000 / 60 / 60 / 24 / 30 / 12)
)

//! Посчитать скорость выполнения какого-нибудь алгоритма
const startTime = Date.now() // = new Date().getTime()

for (let i = 0; i < 1000000; i += 1) {
  // do something
}

const endTime = Date.now()

console.log('startTime', startTime)
console.log('endTime', endTime)
const diff = endTime - startTime
console.log('difference:', diff)
