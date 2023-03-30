const myName = 'Виталий'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен'
const reasonText = 'мне нравится программировать'
const numberOfMonth = 3

const text = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}а. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`
// console.log(text)

let myInfoText = text
  .replaceAll('JavaScript', 'JavaScript'.toLowerCase())
  .replaceAll('курс', 'курс'.toUpperCase())

console.log(myInfoText)
console.log(myInfoText.length)
console.log(myInfoText[0])
console.log(myInfoText[myInfoText.length - 1])
