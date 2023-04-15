//! 4 принципа ООП (Наследование, Инкапсуляция, Полиморфизм, Абстракция):
//! 1. Наследование
class Plane {
  constructor(type, numberOfPassengers) {
    this.type = type
    this.numberOfPassengers = numberOfPassengers
  }

  startFlight() {
    console.log('Полетели!')
  }
}

const plane = new Plane('Пассажирский', 100)
console.log(plane)
plane.startFlight()

class MilitaryPlane extends Plane {
  constructor(type) {
    super(type, 0)
    this.numberOfGuns = 0
  }

  startFlight() {
    console.log('Полетели на военном самолёте!')
  }

  setNumberOfGuns(numberOfGuns) {
    this.numberOfGuns = numberOfGuns
  }

  shoot() {
    console.log('Стреляем!')
  }
}

const militaryPlane = new MilitaryPlane('Военный')
militaryPlane.startFlight()
militaryPlane.setNumberOfGuns(4)
militaryPlane.shoot()
console.log('militaryPlane', militaryPlane)
// instanceof
console.log(militaryPlane instanceof MilitaryPlane)
console.log(militaryPlane instanceof Plane)
class Dog {}
console.log(militaryPlane instanceof Dog)

//! 2. Инкапсуляция
// public
// private #
class Developer {
  #salary // инициализация private поля
  constructor(name, programmingLanguage) {
    this.name = name
    this.programmingLanguage = programmingLanguage
    this.#salary = 3000
  }

  get devSalary() {
    return this.#salary
  }

  set setSalary(salary) {
    return this.#salary = salary
  }

  startCoding() {
    console.log(this.#salary)
    this.#printProgrammingLanguage()
    console.log(`${this.name} начинает писать код!`)
  }

  #printProgrammingLanguage() {
    console.log(`Язык программирования: ${this.programmingLanguage}`)
  }
}

const developer = new Developer('Maxim', 'JavaScript')
console.log(developer)
console.log(developer.name) // public поля
console.log(developer.programmingLanguage) // public поля
developer.startCoding() // public методы
console.log('get devSalary:', developer.devSalary)
developer.setSalary = 5000
console.log('get devSalary:', developer.devSalary)

class JuniorDeveloper extends Developer {
  constructor(name, programmingLanguage) {
    super(name, programmingLanguage)
  }
}

const juniorDeveloper = new JuniorDeveloper('Egor', 'HTML')
juniorDeveloper.startCoding()

//! 3. Полиморфизм

//! 4. Абстракция
