// 1. Название функции должно содержать галгол (в большинстве случаев)
// 2. Название функции должно быть конкретным

// 1. Показывает лоудер
// Неправильное название
function show() {}
// Правильное название
function showLoader() {}

// 2. Переправляет пользователя на следующую страницу
// Неправильное название
function next() {}
// Правильное название
function goToNextPage() {}

// 3. Выводит звук животного
// Неправильное название
function sound() {}
// Правильное название
function getAnimalSound() {}

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
