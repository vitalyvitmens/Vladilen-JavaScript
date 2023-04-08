const clientsEstimations = []

function askClientToGiveEstimation() {
  const estimation = Number(
    prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim()
  )
  if (estimation > 0 && estimation <= 10) {
    clientsEstimations.push(estimation)
  }
}

for (let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((num) => num > 5)
const notGoodEstimations = clientsEstimations.length - goodEstimations.length

alert(`
Всего положительных оценок: ${goodEstimations.length}
Всего отрицательных оценок: ${notGoodEstimations}
`)
