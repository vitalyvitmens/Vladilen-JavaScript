const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав'
  },
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик'
  },
}

function makeDomestic(isDomestic) {
  if (isDomestic) {
    this.isDomestic = isDomestic
  } else {
    this.isDomestic = isDomestic
  }
  console.log(this)
  return console.log(
    `${this.type} по имени ${this.name} говорит ${this.makeSound()}`
  )
}

makeDomestic.bind(dog, true)()
makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])
