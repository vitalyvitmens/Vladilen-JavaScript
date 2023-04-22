const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: true,
    text: 'Выполнить ДЗ после урока',
  },
]

const createTaskItem = (taskId, taskText, taskCompleted) => {
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'
  taskItem.dataset.taskId = taskId

  const taskItemMainContainer = document.createElement('div')
  taskItemMainContainer.className = 'task-item__main-container'

  const taskItemMainContent = document.createElement('div')
  taskItemMainContent.className = 'task-item__main-content'

  taskItem.append(taskItemMainContainer)
  taskItemMainContainer.append(taskItemMainContent)

  const checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'

  const inputCheckbox = document.createElement('input')
  inputCheckbox.type = 'checkbox'
  inputCheckbox.className = 'checkbox-form__checkbox'
  const inputId = `task-${taskId}`
  inputCheckbox.id = inputId
  inputCheckbox.checked = taskCompleted

  const labelCheckbox = document.createElement('label')
  labelCheckbox.htmlFor = inputId

  const taskItemText = document.createElement('span')
  taskItemText.className = 'task-item__text'
  taskItemText.innerText = taskText

  const deleteButton = document.createElement('button')
  deleteButton.className =
    'task-item__delete-button default-button delete-button'
  deleteButton.innerText = 'Удалить'

  taskItemMainContent.append(checkboxForm, taskItemText)
  checkboxForm.append(inputCheckbox, labelCheckbox)
  taskItemMainContainer.append(deleteButton)

  return taskItem
}

const createError = (message) => {
  const error = document.createElement(`span`)
  error.textContent = message
  error.className = `error-message-block`
  return error
}

const tasksListContainer = document.querySelector('.tasks-list')

const render = () => {
  tasksListContainer.innerHTML = ``
  tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text, task.completed)
    tasksListContainer.append(taskItem)
  })
}

render()

const createForm = document.querySelector('.create-task-block')
createForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const textValue = event.target.taskName.value

  const errorHTML = document.querySelector(`.error-message-block`)
  if (errorHTML) {
    errorHTML.remove()
  }

  if (textValue === ``) {
    event.target.append(createError(`Название задачи не должно быть пустым`))
  } else if (
    tasks.some(
      (task) => task.text.toLowerCase() === textValue.toLowerCase().trim()
    )
  ) {
    event.target.append(createError(`Задача с таким названием уже существует`))
  } else {
    tasks.push({ id: Date.now(), completed: false, text: textValue })
    render()
  }
})

const createDeleteModal = (text) => {
  const modalOverlay = document.createElement(`div`)
  modalOverlay.className = `modal-overlay modal-overlay_hidden`

  const deleteModal = document.createElement(`div`)
  deleteModal.className = `delete-modal`

  modalOverlay.append(deleteModal)

  const modalTitle = document.createElement(`h3`)
  modalTitle.className = `delete-modal__question`
  modalTitle.innerText = text
  const modalButtons = document.createElement(`div`)
  modalButtons.className = `delete-modal__buttons`

  const cancelButton = document.createElement(`button`)
  cancelButton.className = `delete-modal__button delete-modal__cancel-button`
  cancelButton.innerText = `Отмена`
  const confirmButton = document.createElement(`button`)
  confirmButton.className = `delete-modal__button delete-modal__confirm-button`
  confirmButton.innerText = `Удалить`

  deleteModal.append(modalTitle, modalButtons)
  modalButtons.append(cancelButton, confirmButton)

  return {
    deleteModal,
    cancelButton,
    confirmButton,
    modalOverlay,
  }
}

const taskListHTML = document.querySelector(`.tasks-list`)

const { deleteModal, cancelButton, confirmButton, modalOverlay } =
  createDeleteModal(`Удалить`)
document.body.prepend(modalOverlay)

const toggleOverlay = () => {
  modalOverlay.classList.toggle(`modal-overlay_hidden`)
}

let taskId

taskListHTML.addEventListener(`click`, (e) => {
  const { target } = e
  taskId = target.closest(`.task-item`).dataset.taskId
  if (target.closest(`.delete-button`)) {
    toggleOverlay()
  }
})

cancelButton.onclick = toggleOverlay
confirmButton.onclick = (e) => {
  const taskIdx = tasks.findIndex((task) => task.id === taskId)
  if (taskIdx !== -1) {
    tasks.splice(taskIdx, 1)
  }
  render()
  toggleOverlay()
}

let dark = false
window.addEventListener(`keydown`, (e) => {
  if (e.code === `Tab`) {
    e.preventDefault()
    dark = !dark
    if (dark) {
      document.body.style.background = `#24292E`
      document
        .querySelectorAll(`.task-item`)
        .forEach((task) => (task.style.color = `#fff`))
      document
        .querySelectorAll(`button`)
        .forEach((task) => (task.style.border = `1px solid #ffffff`))
    } else {
      document.body.style.background = `initial`
      document
        .querySelectorAll(`.task-item`)
        .forEach((task) => (task.style.color = `initial`))
      document
        .querySelectorAll(`button`)
        .forEach((task) => (task.style.border = `none`))
    }
  }
})
