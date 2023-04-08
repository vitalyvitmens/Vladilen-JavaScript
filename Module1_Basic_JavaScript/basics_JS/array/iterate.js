const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

//! For
for (let i = 0; i < developerNames.length; i += 1) {
  console.log('i', i)
  console.log('item', developerNames[i])
}

//! For of
for (const name of developerNames) {
  console.log('name', name)
}

//! forEach
developerNames.forEach((name, index, array) => {
  console.log('name', name)
  console.log('index', index)
  console.log('array', array)
})

// --------------------------------------------------- //

const salariesOfDevelopers2 = [400, 500, 600, 2000, 350]

//! Map (возвращает новый массив, а текущий остается без изменения)
const updatedSalaries = salariesOfDevelopers2.map(
  (salary, index, array) => salary * 2
)
console.log('updatedSalaries', updatedSalaries)

//! Filter (возвращает новый массив, а текущий остается без изменения)
// фильтруем массив по зарплатам которые больше 500уе
const filteredSalaries = salariesOfDevelopers2.filter(
  (salary, index, array) => salary > 500
)
console.log('filteredSalaries', filteredSalaries)

// фильтруем массив по четным индексам кроме нулевого индекса
const filteredSalaries2 = salariesOfDevelopers2.filter(
  (salary, index, array) => index % 2 === 0 && index !== 0
)
console.log('filteredSalaries2', filteredSalaries2)

//! Find (возвращает первое искомое значение в массиве)
const searchedSalary = salariesOfDevelopers2.find(
  (salary, index, array) => salary === 500
)
console.log('searchedSalary', searchedSalary)

//! findIndex (возвращает индекс первого искомого значение в массиве)
const searchedIndex = salariesOfDevelopers2.findIndex(
  (salary, index, array) => salary === 350
)
console.log('searchedIndex', searchedIndex)

const searchedIndex2 = salariesOfDevelopers2.findIndex(
  (salary, index, array) => salary === 349
)
console.log('searchedIndex2', searchedIndex2)

//! some (возвращает true когда хотябы один элемент массива удовлетворяет условию, иначе вернет false)
const elementExixts = salariesOfDevelopers2.some(
  (salary, index, array) => salary > 2000
)
console.log('elementExixts', elementExixts)

//! every (возвращает true когда все элементы массива удовлетворяют условию, иначе вернет false)
const allElementExixts = salariesOfDevelopers2.every(
  (salary, index, array) => salary > 349
)
console.log('allElementExixts', allElementExixts)

//! Reduce
const sum = salariesOfDevelopers2.reduce(
  (acc, salary, index, array) => (acc += salary),
  0
)
console.log('sum', sum)

//! sort (< 0, > 0, = 0)
salariesOfDevelopers2.sort((a, b) => a - b) // сортировка по возрастанию
console.log('salariesOfDevelopers2 sort(max):', salariesOfDevelopers2)

salariesOfDevelopers2.sort((a, b) => b - a) // сортировка по убыванию
console.log('salariesOfDevelopers2 sort(min):', salariesOfDevelopers2)

salariesOfDevelopers2.sort() // значения сортируются как строки
console.log('salariesOfDevelopers2: sort(string)', salariesOfDevelopers2)

const developerNames2 = ['Maxim', 'Igor', 'Nastya', 'Irina']

developerNames2.sort() // значения сортируются как строки по возрастанию
console.log('developerNames2 sort(string max):', developerNames2)

developerNames2.sort((a, b) => {
  if (a < b) {
    return 1
  }
  if (a > b) {
    return -1
  }
  return 0
}) // значения сортируются как строки по убыванию
console.log('developerNames2 sort(string min):', developerNames2)
