const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
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
      alert('Студент выучил все технологии!')
      console.log(this)
    }
    return this
  },
}

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()

// const student2 = {
//   stack: ['HTML'],
//   level: 1,
// }

// student.improveLevel.call(student2)
// student.improveLevel.call(student2)
// student.improveLevel.call(student2)
// student.improveLevel.call(student2)
// student.improveLevel.call(student2)
