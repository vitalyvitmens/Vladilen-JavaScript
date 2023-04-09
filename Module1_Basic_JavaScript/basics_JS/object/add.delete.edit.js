//! Объект — это ассоциативный массив. В обычных массивах мы обращаемся к элементам по их индексу. В ассоциативных массивах доступ к элементам осуществляется по ключу-строке:
const student = {
  id: 1,
  programmingLanguage: 'JavaScript',
  hasExperienceInReact: false,
}

//! Добавление элементов
student['experience'] = 3
student.age = 45
console.log(student)

//! Удаление элементов по ключу
delete student['hasExperienceInReact']
delete student.experience
console.log(student)

//! Изменение значений
student.age = 46
student['age'] = 45
console.log(student)
