const userName = prompt('Как вас зовут?').toUpperCase().trim()
// alert(`Вас зовут ${userName}`)

const userAge = Number(prompt('Сколько вам лет?').trim())
alert(`Вас зовут ${userName} и вам ${userAge}`)
console.log(typeof userAge)
