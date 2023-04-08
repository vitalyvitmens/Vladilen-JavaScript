const currentDeveloper = ['Maxim', 'Oleg']
const newDeveloper = ['Anton', 'Gleb']

//! 1 concat
// const allDeveloper = currentDeveloper.concat(newDeveloper, currentDeveloper)
// console.log('allDeveloper', allDeveloper)

//! 2 spread
const allDeveloper = [...currentDeveloper, ...newDeveloper]
console.log('allDeveloper', allDeveloper)
console.log('allDeveloper', ...allDeveloper)
