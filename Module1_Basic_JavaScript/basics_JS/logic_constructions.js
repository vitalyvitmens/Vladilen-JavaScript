// if
// if else
// switch case
//\   ? :
const isFrontEndDeveloper = true
if (isFrontEndDeveloper) {
  console.log('Вы Front-End разработчик. Добро пожаловать в команду!')
} else {
  console.log('Вы не Front-End разработчик!')
}

const closingTime = 8
const currentTime = 5

if (currentTime > closingTime) {
  console.log('Магазин закрыт!')
} else {
  console.log('Магазин открыт!')
}

const developerJobType = 'Front-End'

if (developerJobType === 'Front-End') {
  console.log('2000$')
} else if (developerJobType === 'Back-End') {
  console.log('1500$')
} else if (developerJobType === 'Full-Stack') {
  console.log('3500$')
} else {
  console.log('0$')
}

// switch case
switch (developerJobType) {
  case 'Front-End':
    console.log('2000$')
    break
  case 'Back-End':
    console.log('1500$')
    break
  case 'Full-Stack':
    console.log('3500$')
    break
  default:
    console.log('0$')
}

//\ ? : (замена if на ? и else на :) Тернарный оператор
const favoriteDrink = 'Кофе'
let message = ''
if (favoriteDrink === 'Кофе') {
  message = 'Ваш любимый напиток - это кофе'
} else {
  message = 'Вы скорее всего любите чай'
}
console.log(message)

const message2 =
  favoriteDrink === 'Кофе'
    ? 'Ваш любимый напиток - это кофе'
    : 'Вы скорее всего любите чай'
console.log(message2)
