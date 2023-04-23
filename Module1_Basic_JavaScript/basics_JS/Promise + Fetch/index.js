// //! Синхронный код
// const numberOfElements = 3
// console.log(`Начало цикла`)
// for (let i = 0; i < numberOfElements; i += 1) {
//   console.log(`i:`, i)
// }
// console.log(`Конец цикла`)

// //! Асинхронный код
// const developer = {
//   name: `Egor`,
//   isJSDev: true,
// }

// setTimeout(() => {
//   console.log(`setTimeout() After 3 sec`)
// }, 3000)

// console.log(developer)

// let count = 0
// setInterval(() => {
//   count += 1
//   if (count > 3 && count <= 6) {
//     console.log(`setInterval() every 1 sec`)
//   }
// }, 1000)

// //! 3 статуса promise:
// // 1). pending (находится в ожидании)
// // 2). fulfilled (удачное выполнение)
// // 3). rejected (выполнение с ошибкой)
// const promise = new Promise((resolve, reject) => {
//   if (developer.isJSDev) {
//     setTimeout(() => {
//       resolve(`${developer.name} является JS разработчиком`)
//     }, 3000)
//   } else {
//     reject(`${developer.name} НЕ является JS разработчиком`)
//   }
// })

// console.log(promise)

// //! then, catch, finally
// promise
//   .then((successMessage) => {
//     console.log(`successMessage:`, successMessage)
//   })
//   .catch((error) => {
//     console.log(`error:`, error)
//   })
//   .finally(() => {
//     console.log(`finally`)
//   })

//! fetch - специальная функция для получения данных по URL
// fetch(url)
// GET, POST, DELETE
const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`

const createTodoElement = (text) => {
  const todoElement = document.createElement(`li`)
  const todoElementAnchor = document.createElement(`a`)
  todoElementAnchor.href = `#`
  todoElementAnchor.textContent = text
  todoElement.append(todoElementAnchor)

  return todoElement
}

const toggleLoader = () => {
  const loaderHTML = document.querySelector(`#loader`)
  const isHidden = loaderHTML.hasAttribute(`hidden`)
  if (isHidden) {
    loaderHTML.removeAttribute(`hidden`)
  } else {
    loaderHTML.setAttribute(`hidden`, ``)
  }
}

const dataContainer = document.querySelector(`#data-container`)

const getAllTodos = () => {
  toggleLoader()
  const result = fetch(TODOS_URL, {
    method: `GET`,
  })

  console.log(`result`, result)

  result
    .then((response) => {
      console.log(`response`, response)
      if (!response.ok) {
        throw new Error(`Ошибка запроса`)
      }
      return response.json()
      // return response.text()
    })
    .then((todos) => {
      console.log(todos)
      todos.forEach((todo) => {
        const todoHTML = createTodoElement(todo.title)
        dataContainer.append(todoHTML)
      })
    })
    .catch((error) => {
      console.log(`error`, error)
    })
    .finally(() => {
      toggleLoader()
    })
}

getAllTodos()

