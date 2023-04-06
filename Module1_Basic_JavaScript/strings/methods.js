// TODO: Methods String
// toUpperCase, toLowerCase
const animal = 'Lion'
console.log('lower', animal.toLowerCase()) // возращает новую строку
console.log('upper', animal.toUpperCase()) // возращает новую строку
console.log('animal', animal)

// Найти символы в строке - indexOf, includes
const text = 'Мой любимый язык программирования JavaScript'
console.log('indexOf', text.indexOf('М'))
console.log('indexOf', text.indexOf('JavaScript'))
console.log('indexOf', text.indexOf('1977'))

console.log('includes', text.includes('JavaScript'))
console.log('includes', text.includes(' '))
console.log('includes', text.includes('1977'))

// Обрезка строки - slice, substring
const programmingLanguage2 = 'JavaScript'
console.log('slice', programmingLanguage2.slice(0, 4))
console.log('slice', programmingLanguage2.slice(4))
console.log('slice', programmingLanguage2.slice(-6))

console.log('substring', programmingLanguage2.substring(0, 4))
console.log('substring', programmingLanguage2.substring(4))

// Замена символов в строке - replace, replaceAll
console.log('replace', programmingLanguage2.replace('Script', ' '))
console.log('replace', programmingLanguage2.replace('Script', ' no Script'))
console.log('replace', programmingLanguage2.replace('Script', '123'))
console.log('replace', programmingLanguage2.replace('a', 'A'))

console.log('replaceAll', programmingLanguage2.replaceAll('a', 'A'))

// Повторение строки несколько раз - repeat
const helloText = 'Hello '
console.log(helloText.repeat(3))

// Убрать лишние пробелы в начале и в конце строки - trim
const nameOfUser = prompt('Введите ваше имя:')
console.log(nameOfUser.trim())

/* Задача: 
function XO(str) {

}

Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
*/
function XO(str) {
  count_x = str.match(/[x+X]/g).length
  count_o = str.match(/[o+O]/g).length
  if (count_x === count_o) {
    return true
  } else {
    return false
  }
}

string = 'XO1110o'
console.log(XO(string))
