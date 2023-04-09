const ordersArr = [4, 2, 1, 3]
const people = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Николай' },
  { id: 3, name: 'Ангелина' },
  { id: 4, name: 'Виталий' },
]

function giveTalonsInOrder(patients, orders) {
  return patients.sort((a, b) => orders.indexOf(a.id) - orders.indexOf(b.id))
}
const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)

function giveTalonsInOrder2(patients, orders) {
  const newPatients = patients.map((key) => {
    key.sortId = orders.indexOf(key.id)
    return key
  })
  return newPatients.sort((a, b) => a.sortId - b.sortId)
}
const result2 = giveTalonsInOrder2(people, ordersArr)
console.log('result2', result2)
