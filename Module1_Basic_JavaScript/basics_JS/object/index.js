const developer = {
  // key: value
  name: 'Maxim',
  job: 'Front-End developer',
  experience: 24,
  jobAllInfo: {
    type: 'Front-End',
    framework: 'ReactJS',
  },
}

console.log(developer)

//! Получение значений объекта по ключу:
// 1 способ через точку
console.log('name:', developer.name)
console.log('jobAllInfo:', developer.jobAllInfo)
// 2 способ чеерз квадратные скобки и название ключа в кавычках
console.log('name:', developer['name'])
console.log('jobAllInfo:', developer['jobAllInfo'])

const key = 'name'
console.log(developer[key])

console.log('jobAllInfo.type:', developer.jobAllInfo.type)
console.log('jobAllInfo.type:', developer['jobAllInfo']['type'])

console.log('jobAllInfo.framework:', developer.jobAllInfo.framework)
console.log('jobAllInfo.framework:', developer['jobAllInfo']['framework'])
