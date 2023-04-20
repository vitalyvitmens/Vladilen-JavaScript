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

//! keydown, keyup
document.addEventListener('keydown', (e) => {
  console.log('keydown:', e)
  const { key } = e
  console.log('keydown:', key)
  // const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
  // if (taskItemToDelete) {
  //   const deleteConfirmed = confirm(
  //     `Вы действительно хотите удалить данную задачу?`
  //   )
  //   if (deleteConfirmed) {
  //     taskItemToDelete.remove()
  //   }
  // }
})

document.addEventListener('keyup', (e) => {
  console.log('keyup:', e)
  const { key } = e
  console.log('keyup:', key)
  const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`)
  if (taskItemToDelete) {
    const deleteConfirmed = confirm(
      `Вы действительно хотите удалить данную задачу?`
    )
    if (deleteConfirmed) {
      taskItemToDelete.remove()
    }
  }
})

//! mouseover
const createTooltip = (text) => {
  const tooltip = document.createElement(`span`)
  tooltip.textContent = text
  tooltip.className = `tooltip`

  return tooltip
}

document.addEventListener(`mouseover`, (e) => {
  // console.log(e)
  const { target } = e
  // console.log(target)
  const isOverDeleteButton = target.className.includes(
    `task-item__delete-button`
  )
  if (isOverDeleteButton) {
    console.log(`success`)
    const taskItemHTML = target.closest(`.task-item`)
    const taskId = taskItemHTML?.dataset.taskId
    if (taskId) {
      const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}?`)
      target.append(tooltipHTML)
    }
  }
})

//! mouseout
document.addEventListener(`mouseout`, (e) => {
  const { target } = e
  const isOutFromDeleteButton = target.className.includes(
    `task-item__delete-button`
  )
  if (isOutFromDeleteButton) {
    const tooltip = document.querySelector(`.tooltip`)
    if (tooltip) {
      tooltip.remove()
    }
  }
})

//! mousemove
document.addEventListener(`mousemove`, (e) => {
  // console.log(e)
})

//! contextmenu
document.addEventListener(`contextmenu`, (e) => {
  console.log(e)
  e.preventDefault()
})

//! change, input
const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes(`@`)) {
    return false
  }

  return true
}

const createTaskBlock2 = document.querySelector(`.create-task-block`)
const taskNameInput = createTaskBlock2.querySelector(
  `.create-task-block__input`
)
// taskNameInput.addEventListener(`change`, (e) => {
//   const { target } = e
//   console.log(target)
//   const { value } = target
//   const isValid = checkTaskNameInputOnValidation(value)
//   const messageBlockFromDOM = document.querySelector(`.error-message-block`)

//   if (!isValid) {
//     const newMessageBlock = document.createElement(`span`)
//     newMessageBlock.className = `error-message-block`
//     newMessageBlock.textContent = `Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ "@"!`
//     createTaskBlock2.append(newMessageBlock)
//   } else if (isValid && messageBlockFromDOM) {
//     messageBlockFromDOM.remove()
//   }

//   console.log(value)
// })

taskNameInput.addEventListener(`input`, (e) => {
  const { target } = e
  console.log(target)
  const { value } = target
  const isValid = checkTaskNameInputOnValidation(value)
  const messageBlockFromDOM = document.querySelector(`.error-message-block`)

  if (!isValid) {
    const newMessageBlock = document.createElement(`span`)
    newMessageBlock.className = `error-message-block`
    newMessageBlock.textContent = `Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ "@"!`
    createTaskBlock2.append(newMessageBlock)
  } else if (isValid && messageBlockFromDOM) {
    messageBlockFromDOM.remove()
  }

  console.log(value)
})
