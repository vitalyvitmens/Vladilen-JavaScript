const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => price + 0.5)
const forCoffees = coffees.forEach((coffee, index) =>
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`)
)
