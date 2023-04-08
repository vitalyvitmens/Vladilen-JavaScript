const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => price + 0.5)
coffees.forEach((name, index) =>
  alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
)
