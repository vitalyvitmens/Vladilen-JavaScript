//! Старые способы что бы получать html элементы в JS
const tasksBlock = document.getElementById('tasks')
console.log('tasksBlock', tasksBlock)

const allNavButtons = document.getElementsByClassName(
  'main-navigation__button-item'
)
console.log('allNavButtons', allNavButtons)

const allButtons = document.getElementsByTagName('button')
console.log('allButtons', allButtons)

//! Современные способы что бы получать html элементы в JS
// querySelector
const tasksBlock2 = document.querySelector('#tasks')
console.log('tasksBlock2', tasksBlock2)

const mainNavigation = document.querySelector('.main-navigation')
console.log('mainNavigation', mainNavigation)

const firstButton = document.querySelector('button')
console.log('firstButton', firstButton)

const thirdNavigationButton = document.querySelector('[data-button-id="3"]')
console.log('thirdNavigationButton', thirdNavigationButton)

// querySelectorAll
const allNavigationButtons = document.querySelectorAll(
  '.main-navigation__button-item'
)
console.log('allNavigationButtons', allNavigationButtons)
allNavigationButtons.forEach((button, index) => console.log(index, button))

const allButton = document.querySelectorAll('button')
console.log('allButton', allButton)

const createTaskBlock = document.querySelector('.create-task-block')
const submitButton = createTaskBlock.querySelector('[type="submit"]')
console.log('submitButton', submitButton)
