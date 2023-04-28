const myNumber = 42

// localStorage.removeItem(`number`)
// console.log(localStorage.getItem(`number`))
// localStorage.setItem(`number`, myNumber.toString())
// console.log(localStorage.getItem(`number`))
// localStorage.clear()

const object = {
  name: `Egor`,
  age: 14,
}

localStorage.clear()
localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem(`person`) // typeof String
const person = JSON.parse(raw) // typeof Object
person.name = `Vitaly`
console.log(person)

window.addEventListener(`storage`, (e) => {
  console.log(e)
})
