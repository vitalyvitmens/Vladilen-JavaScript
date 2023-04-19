//! createElement
const newNavButton = document.createElement('a')
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'
console.log(newNavButton)

//! append(), prepend(), insertAdjacentElement('afterbegin', 'afterend', 'beforebegin', 'beforeend')
const mainNavigation2 = document.querySelector('.main-navigation')
mainNavigation2.append(newNavButton) // добавляет элемент в самый конец родительского элемента
// mainNavigation2.prepend(newNavButton) // добавляет элемент в самое начало родительского элемента

mainNavigation2.insertAdjacentElement('afterbegin', newNavButton)
// mainNavigation2.insertAdjacentElement('afterend', newNavButton)
// mainNavigation2.insertAdjacentElement('beforebegin', newNavButton)
// mainNavigation2.insertAdjacentElement('beforeend', newNavButton)

//! remove
// mainNavigation2.remove() // удалить навигацию

//! closest
const taskItemText = document.querySelector('.task-item__text')
console.log('taskItemText', taskItemText)

const taskItem = taskItemText.closest('.task-item')
console.log('taskItem', taskItem)

//! classlist: add, remove, toggle
const firstNavigationButton3 = document.querySelector(
  '.main-navigation__button-item'
)
firstNavigationButton3.classList.add('main-navigation__button-item_selected')
firstNavigationButton3.classList.remove('main-navigation__button-item_selected')
firstNavigationButton3.classList.toggle('main-navigation__button-item_selected') // если класс в кавычках есть, то удалит, если нету - то добавит данный класс
firstNavigationButton3.classList.toggle('main-navigation__button-item_selected') // если класс в кавычках есть, то удалит, если нету - то добавит данный класс

const createTaskInput = document.querySelector('.create-task-block__input')
console.log(createTaskInput.hasAttribute('type')) // true - hasAttribute() проверяет существует ли атрибут
console.log(createTaskInput.hasAttribute('type1')) // false - hasAttribute() проверяет существует ли атрибут
console.log(createTaskInput.getAttribute('value')) // getAttribute() позволяет получить значение атрибута 'Посмотреть урок по JavaScript'
createTaskInput.removeAttribute('placeholder') // removeAttribute() позволяет удалить атрибут в данном случае 'placeholder'
createTaskInput.setAttribute('placeholder', 'Создать новую задачу') // добавляет: 1).сам атрибут 2).значение атрибута
