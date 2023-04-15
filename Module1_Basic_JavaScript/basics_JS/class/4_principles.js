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
class Dog{}
console.log(militaryPlane instanceof Dog)

//! 2. Инкапсуляция

//! 3. Полиморфизм

//! 4. Абстракция
