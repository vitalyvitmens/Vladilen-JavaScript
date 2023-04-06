function getName1(name) {
  return String(name)
}

const getName2 = function (name) {
  return String(name)
}

const getName3 = (name) => String(name)

console.log(getName1('Владимир'))
console.log(getName1(1))
console.log(getName2('Ильич'))
console.log(getName2(2))
console.log(getName3('Ленин'))
console.log(getName3(3))

console.log(123)
