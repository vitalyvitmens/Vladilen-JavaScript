const user3 = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
  getName() {
    return this.name
  },
  getProgrammingLanguage() {
    return this.programmingLanguage
  },
  // getProgrammingLanguage: function() {
  //   console.log(this)
  //   return this.programmingLanguage
  // },

  // getProgrammingLanguage: () => {
  //   console.log(this)
  //   return this.programmingLanguage
  // }, // контекст будет глобальный = window
}

console.log('getName:', user3.getName())

const newGetName = user3.getName
console.log('newGetName:', newGetName.call(user3)) // window

console.log(user3.getProgrammingLanguage())
