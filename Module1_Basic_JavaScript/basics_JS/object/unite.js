const developerInfo = {
  name: 'Maxim', // из одинаковых ключей при объединении применится тот который в последнем объекте
  age: 25,
  experience: 2,
}

const developerExtraInfo = {
  name: 'Egor', // из одинаковых ключей при объединении применится тот который в последнем объекте
  height: 180,
  isJunior: false,
}

//! 1 Unit spread (объединение двух объектов в один при помощи ...spread оператора)
const developer3 = {
  ...developerInfo,
  ...developerExtraInfo,
}
console.log(developer3)

const car3 = {
  name: 'Toyota Corolla',
  year: 2017,
}

const carOwner = {
  ownerName: 'Ivan Ivanov',
  ownerAge: 27,
}

const carFullInfo = {
  ...car3,
  ...carOwner,
  additionalInfo: 'Дополнительная информация',
}

console.log(carFullInfo)

//! 2 Unit Object.assign (второй способ объединения Иногда нужно добавить свойства в существующий объект без создания нового объекта. В этом случае на помощь придёт метод Object.assign(), который копирует в целевой объект все свойства из других объектов:)
const developer4 = Object.assign(developerInfo, developerExtraInfo) // первый целевой второй из которого берем ключи и значения для добавления в целевой
console.log(developer4)

const car4 = {
  name: "Toyota Corolla",
  year: 2017
};

const carOwner2 = {
  ownerName: "Ivan Ivanov",
  ownerAge: 27
};

Object.assign(car4, carOwner2);

console.log(car4);