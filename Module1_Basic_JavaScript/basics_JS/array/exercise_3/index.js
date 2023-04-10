const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию:').trim()

const find = coffees.findIndex(
  (coffee) => coffee.toLowerCase() == coffeeName.toLowerCase()
)
if (find >= 0) {
  alert(
    `Держите ваш любимый кофе ${coffees[find]}. Он №${
      find + 1
    } по популярности в нашей кофейне.`
  )
} else {
  alert('К сожалению, такого вида кофе нет в наличии')
}
