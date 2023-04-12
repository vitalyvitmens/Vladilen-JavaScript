const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
    return this
  },
}

function improveLevel() {
  this.level += 1
  if (this.level === 2) {
    this.stack.push('CSS')
  } else if (this.level === 3) {
    this.stack.push('JavaScript')
  } else if (this.level === 4) {
    this.stack.push('React')
  } else if (this.level === 5) {
    this.stack.push('NodeJS')
  } else if (this.level > 5) {
    console.log('Студент выучил все технологии!')
  }
  return student
}

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()

console.log(improveLevel.call(student))
console.log(improveLevel.call(student))
console.log(improveLevel.call(student))
console.log(improveLevel.call(student))
console.log(improveLevel.call(student))
