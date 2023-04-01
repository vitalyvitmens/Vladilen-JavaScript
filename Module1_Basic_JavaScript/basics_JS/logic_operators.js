// && (И)
// || (ИЛИ)
//\ ! (НЕ)
//\ ?? Оператор объединения с null

const userAge = 16
if (userAge > 5 && userAge <= 18) {
  console.log('Пользователь ходит в школу')
}

const programmingLanguage = 'JavaScript'
const experienceInYear = 2

if (programmingLanguage === 'JavaScript' && experienceInYear > 1) {
  console.log('Добро пожаловать в нашу компанию')
}

// || (ИЛИ)
const currentHours = 10
if (currentHours < 8 || currentHours > 20) {
  console.log('Наша офис закрыт. Приходите завтра')
} else {
  console.log('Добро пожаловать в офис')
}

const userNickname = null
const defaultNickname = 'User'
const nickname = userNickname || defaultNickname || 'noname'

const finalNickname = userNickname && 'Пользователь существует'

console.log('nickname', nickname)
console.log('finalNickname', finalNickname)

//\ ! (НЕ)
const hasAccess = true
console.log('hasAccess', !hasAccess)

if (!hasAccess) {
  console.log('Доступ закрыт')
} else {
  console.log('Доступ открыт')
}

const answer = prompt('Сколько Вам лет?').trim()
if (!answer) {
  alert('Введите ваше полное количество лет')
} else {
  alert(`Вам ${answer} лет`)
}

//\ ?? Оператор нулевого слияния с null
// Для логического оператора ИЛИ || ложными значениями являются: false, 0, '', NaN, undefined, null
console.log(false || 'Hello World')
// Для логического оператора нулевого слияния ?? ложными значениями являются: null, undefined
console.log(false ?? 'Hello World')
