// TODO: В JavaScript все есть 8 типов данных, которые деляться на:             1). Примитивы (string, number, boolean, null, undefined, symbol, bigint)       2). Не Примитивы (object)

// TODO: 1. string
const favoriteDrink = 'Milk'
console.log(favoriteDrink)

// TODO: 2. number
const numberOfLiter = 1
console.log(`Drink ${numberOfLiter} liter ${favoriteDrink} in the day`)

// TODO: 3. boolean
const isColdDrink = true
console.log(isColdDrink)

// TODO: 4. null - пусто, значение не известно
const studentFavoriteDrink = null
console.log(studentFavoriteDrink)

// TODO: 5. undefined - значение не было присвоено
let carOwner
let carOwner2 = undefined
console.log(carOwner)
console.log(carOwner2)

// TODO: 6. object - позволяет объединить несколько параметров (ключ и значение) в одну сущность
const drink = {
  favoriteDrink: 'Milk',
  numberOfLiter: 1,
  isColdDrink: true,
}
console.log(drink)

// TODO: 7. symbol - нужен для создания уникальных ключей объекта
const id = Symbol('id')
console.log(id)
console.log(typeof id)
// alert(id) // TypeError: Cannot convert a Symbol value to a string
// alert(id.toString())
// alert(id.description)

// TODO: 8. bigint - большое число от -(2^53 - 1) до 2^53 - 1
const numberAsBigInt = 1n
const bigIntNumber = BigInt(10)
console.log(numberAsBigInt)
console.log(bigIntNumber)
