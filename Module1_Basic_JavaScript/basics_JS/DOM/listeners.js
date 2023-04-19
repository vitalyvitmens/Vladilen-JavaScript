// const firstNavButton5 = document.querySelector('.main-navigation__button-item')
// firstNavButton5.addEventListener('click', (event) => {
//   console.log(event.target)
//   // const target = event.target
//   const { target } = event
//   target.classList.add('main-navigation__button-item_selected')
// })

const allNavButtons5 = document.querySelectorAll(
  '.main-navigation__button-item'
)
allNavButtons5.forEach((button) => {
  button.addEventListener('click', (event) => {
    allNavButtons5.forEach((button) => {
      button.classList.remove('main-navigation__button-item_selected')
    })
    // const target = event.target
    const { target } = event
    target.classList.add('main-navigation__button-item_selected')
  })
})

//! submit
const createTaskForm5 = document.querySelector('.create-task-block')
createTaskForm5.addEventListener('submit', (event) => {
  console.log('event', event)
  event.preventDefault()
  const { target } = event
  const taskNameInput = target.taskName
  const inputValue = taskNameInput.value
  console.log('inputValue', inputValue)

  if (inputValue) {
    alert(`Вы создали задачу ${inputValue}`)
  } else {
    alert('введите правильные данные!')
  }
})
