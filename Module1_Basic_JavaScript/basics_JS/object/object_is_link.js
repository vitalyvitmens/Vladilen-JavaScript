// 7 - приминиты (не ссылочный тип данных)
// 1 - не примитив Object (ссфлочный тип данных)

const setName = (entity, value) => {
  if (typeof entity === 'object') {
    entity.name = value
  } else {
    entity = value
  }
}

const developer2 = {
  name: 'Maxim',
}
let developerName = 'Maxim'

setName(developer2, 'Max')
setName(developerName, 'Max')

console.log('developer2', developer2)
console.log('developerName', developerName)

const entity = {}
const entityCopy = entity
console.log(entity === entityCopy) // true

console.log({} === {}) // false
console.log([] === []) // false
console.log('' === '') // true
console.log(5 === 5) // true
