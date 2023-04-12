//! This - object
// Google Chrome - Window
console.log(this)

const user = {
  name: 'Maxim',
  dateOfBirth: 1977,
  getName() {
    return this.name
  },
  calculateAge() {
    const currentYear = new Date().getFullYear()
    return currentYear - this.dateOfBirth
  },
  getAllInfo: function () {
    const age = this.calculateAge()
    console.log(`Name: ${this.name}, Age: ${age}`)
  },
}

console.log(user.getName())
console.log(user.calculateAge())
user.getAllInfo()

//! bind, call, apply
const user2 = {
  name: 'Igor',
}
const user2Name = user.getName.call(user2)
console.log('user2Name:', user2Name)

const userName = user.getName.call(user)
console.log('userName:', userName)
