const tasksWrapper = document.querySelector('.tasks__wrapper')
console.log(tasksWrapper)
console.log(tasksWrapper.className)

tasksWrapper.className = 'new_tasks__wrapper'
console.log(tasksWrapper.className)

const tasksBlock3 = document.querySelector('#tasks')
console.log(tasksBlock3)
console.log(tasksBlock3.id)

tasksBlock3.id = 'new_tasks'
console.log(tasksBlock3.id)

//! innerText textContent
const submitButton2 = document.querySelector('[type="submit"]')
const submitButton3 = document.querySelector('.create-task-block__button')
console.log(submitButton2.innerText)
console.log(submitButton3.innerText)
console.log(submitButton2.textContent)
console.log(submitButton3.textContent)

submitButton2.textContent = '!!! СОЗДАТЬ !!!'
console.log(submitButton2.innerText) // innerText скрывает теги и отображет код согласно тегам
console.log(submitButton2.textContent) // textContent отображет теги

//! innerHTML
console.log(tasksBlock3.innerHTML) // innerHTML содержит в себе код HTML-разметки внутри элемента
// tasksBlock3.innerHTML = '<b>tasksBlock3</b>'
console.log(tasksBlock3.innerHTML)

//! children
const createTaskForm = document.querySelector('.create-task-block')
console.log(createTaskForm.children)

//! data-атрибуты
const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log(firstNavButton.dataset.buttonId)
firstNavButton.dataset.buttonId = '10'
console.log(firstNavButton.dataset.buttonId)

//! style
firstNavButton.style.fontWeight = 'bold'
firstNavButton.style.color = 'red'
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #fff'
firstNavButton.style.background = 'blue'
