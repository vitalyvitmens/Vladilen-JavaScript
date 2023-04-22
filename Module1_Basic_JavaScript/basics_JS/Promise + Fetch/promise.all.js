// Promise.all([
//   new Promise(), // fulfilled
//   new Promise(), // rejected
//   new Promise(),
// ])

// fulfilled
// rejected

const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`
const todosIds = [43, 10, 5, 100, 101]
const dataContainer = document.querySelector(`#data-container`)

const createTodoElement = (text) => {
  const todoElement = document.createElement(`li`)
  const todoElementAnchor = document.createElement(`a`)
  todoElementAnchor.href = `#`
  todoElementAnchor.textContent = text
  todoElement.append(todoElementAnchor)

  return todoElement
}

const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => response.json())
      return Promise.all(dataResults)
    })
    .then((todos) => {
      console.log(`todos`, todos)
      todos.forEach((todo) => {
        const todoHTML = createTodoElement(todo.title)
        dataContainer.append(todoHTML)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

getTodosByIds(todosIds)

// Promise.all().txt: Для примера запросим данные нескольких пользователей GitHub и выведем результаты в консоль:
Promise.all([
  fetch('https://api.github.com/user/1'),
  fetch('https://api.github.com/user/2'),
  fetch('https://api.github.com/user/3'),
])
  .then((responses) => {
    const results = responses.map((response) => response.json())
    return Promise.all(results)
  })
  .then((results) => {
    console.log(results)
  })
