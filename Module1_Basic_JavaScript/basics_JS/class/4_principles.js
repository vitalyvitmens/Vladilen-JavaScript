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
    return (this.#salary = salary)
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

//! 3. Полиморфизм - полиморфизм означает «множество форм», это способность вызвать один и тот же метод у разных объектов, и при этом они могут выполнять разные действия, одинаковым будет только имя метода, его реализация будет зависеть от класса. (одно действие, несколько реализаций)
class Animal3 {
  constructor(name) {
    this.name = name
  }

  makeSound() {} // одно действие
}

class Dog3 extends Animal3 {
  constructor(name) {
    super(name)
  }

  makeSound() {
    console.log(`${this.name} говорит: Гав-гав`) // несколько разных реализаций
  }
}

class Horse extends Animal3 {
  constructor(name) {
    super(name)
  }

  makeSound() {
    console.log(`${this.name} гооворит: Иго-го-го`) // несколько разных реализаций
  }
}

class Cat3 extends Animal3 {
  constructor(name) {
    super(name)
  }

  makeSound() {
    console.log(`${this.name} говорит: Мяу-мяу`)
  }
}

const dog3 = new Dog3('Ричи')
const horse = new Horse('Вороной')
const cat3 = new Cat3('Барон')

const animals = [dog3, horse, cat3]
animals.forEach((animal) => animal.makeSound()) // вызываем метод для разных объектов. В массиве у нас 3 разных типа объекта, но метод работает для каждого из них. Наша реализация полиморфна.

//! 4. Абстракция - это принцип, означающий выделение минимальных базовых данных и структуры, не вдаваясь в детали.                         (использование только тех характеристик объекта, которые с наибольшей точностью представляют его в какой-то определенной системе)
class Footballer {
  // класс Footballer является абстрактным, так как он описывает какие-то общие параметры присущие каждому футболисту. В нем мы используем только те характеристики объекта, которые с большей точность представляют его в данной системе, в системе футболиста и все эти параметры являются обобщенными. Конкретизация параметров делается в дочерних классах.
  constructor(name, club) {
    this.name = name
    this.club = club
  }

  shoot() {}

  celebrateGoal() {}

  pass() {}
}

class Forward extends Footballer {
  constructor(name, club) {
    super(name, club)
  }

  shoot() {
    console.log(`Очень сильный удар!`)
  }

  celebrateGoal() {
    console.log(`Дааа! Я забил гол!`)
  }

  pass() {
    console.log(`Средненький пас`)
  }
}

class Animal4 {
  constructor(name) {
    this.name = name
  }
  makeSound() {}
  eat() {}
  move() {}
}

class Horse4 extends Animal4 {
  // Примечание: Если конструктор просто вызывает родительский
  // со всеми переданными параметрами, то его можно не определять

  makeSound() {
    console.log('Иго-го')
  }

  eat() {
    console.log('Лошадь ест траву')
  }

  move() {
    console.log('Лошадь бежит')
  }
}

class Snake extends Animal4 {
  makeSound() {
    console.log('Ш-ш-ш')
  }

  eat() {
    console.log('Змея ест мышку')
  }

  move() {
    console.log('Змея ползет')
  }
}

const horse4 = new Horse4('Лошадь')
horse4.makeSound() // Иго-го
horse4.eat() // Лошадь ест траву
horse4.move() // Лошадь бежит

const snake = new Snake('Змея')
snake.makeSound() // Ш-ш-ш
snake.eat() // Змея ест мышку
snake.move() // Змея ползет
// В данном примере мы создали абстрактный класс Animal, в котором описана минимальная основная структура: название животного и его действия. Конкретная реализация полностью легла на дочерние классы (в данном случае методы).

//! Статические поля и методы
class Car {
  // Статический метод (так как без ключевого слова this)
  static isCar(car) {
    return car instanceof Car
  }

  // Статическое поле (так как без ключевого слова this)
  static #initialParams = {
    // так как оно используется только внутри нашего класса Car делаем его приватным используя #
    name: 'Audi',
    maxSpeed: 150,
  }

  constructor(name, maxSpeed) {
    this.name = name || Car.#initialParams.name
    this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed
  }

  drive() {
    console.log(`Машина ${this.name} сейчас в пути!`)
  }
}

const car = new Car('BMW', 200)
const isCar = Car.isCar(car)
const isCar2 = Car.isCar(snake)
const bike = {}
const isCar3 = Car.isCar(bike)
console.log(car)
console.log(isCar)
console.log(isCar2)
console.log(isCar3)

const audi = new Car()
console.log(audi)

class Person {
  static isPerson(obj) {
    return obj instanceof Person
  }

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const person1 = new Person('Алекс', 25)
const person2 = {}

console.log(Person.isPerson(person1)) // true
console.log(Person.isPerson(person2)) // false

class SimpleClass {
  static staticProperty = 'Я – статичное свойство'
  static staticMethod() {
    return 'Я – статичный метод'
  }

  constructor(value1, value2) {
    this.value1 = value1
    this.value2 = value2
  }

  foo() {
    console.log(this.value1, this.value2)
  }
}

console.log(SimpleClass.staticProperty) // Я статичное свойство
console.log(SimpleClass.staticMethod()) // Я – статичный метод
