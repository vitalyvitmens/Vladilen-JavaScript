//! ООП
//! function и class
// function Animal2(name) {
//   this.name = name

//   this.getName2 = function () {
//     return this.name
//   }
// }

// function Pet(type, name) {
//   this.type = type
//   this.name = name
//   this.favoriteAction = 'спать'
//   this.say = function () {
//     console.log(
//       `${this.type} по имени ${this.name} любит ${this.favoriteAction}.`
//     )
//   }
// }

// const beagle = new Pet('Бигль', 'Ричи')

// console.log(beagle)
// // Pet {type: 'Бигль', name: 'Ричи', favoriteAction: 'спать', say: ƒ}
// beagle.say()
// // Бигль по имени Ричи любит спать.

//! class
class Animal2 {
  constructor(name) {
    this.name = name

    this.getName2 = function () {
      return this.name
    }
  }
}

class Pet {
  constructor(type, name) {
    this.type = type
    this.name = name
    this.favoriteAction = 'спать'
    this.say = function () {
      console.log(
        `${this.type} по имени ${this.name} любит ${this.favoriteAction}.`
      )
    }
  }
}

const beagle = new Pet('Бигль', 'Ричи')

console.log(beagle)
// Pet {type: 'Бигль', name: 'Ричи', favoriteAction: 'спать', say: ƒ}
beagle.say()
// Бигль по имени Ричи любит спать.

//! new
const cat2 = new Animal2('Кот')
console.log('cat2', cat2)
console.log(cat2.name)
console.log(cat2.getName2())

const dog = new Animal2('Собака')
console.log('dog', dog)
console.log(dog.name)
console.log(dog.getName2())


