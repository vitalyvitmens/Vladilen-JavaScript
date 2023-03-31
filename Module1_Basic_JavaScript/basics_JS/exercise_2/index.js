let correctAnswers = 0
let incorrectAnswers = 0

const answer1 = 4
const answer2 = 4
const answer3 = 1
const answer4 = 12
const answer5 = 6

const question1 = Number(prompt('Сколько будет 2 + 2?').trim())
if (question1 === answer1) {
  alert('Ответ Верный')
  correctAnswers += 1
} else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
}
const question2 = Number(prompt('Сколько будет 2 * 2?').trim())
if (question2 === answer2) {
  alert('Ответ Верный')
  correctAnswers += 1
} else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
}
const question3 = Number(
  prompt(
    'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
  ).trim()
)
if (question3 === answer3) {
  alert('Ответ Верный')
  correctAnswers += 1
} else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
}
const question4 = Number(
  prompt(
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
  ).trim()
)
if (question4 === answer4) {
  alert('Ответ Верный')
  correctAnswers += 1
} else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
}
const question5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim())
if (question5 === answer5) {
  alert('Ответ Верный')
  correctAnswers += 1
} else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
}
alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
)
