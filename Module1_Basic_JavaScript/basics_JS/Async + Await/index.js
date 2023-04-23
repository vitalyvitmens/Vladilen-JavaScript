//! конструкции then catch finally заменим async await
const USERS_URL = `https://jsonplaceholder.typicode.com/users`
const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`

//! код на then catch finally
// fetch(USERS_URL)
//   .then((response) => response.json())
//   .then((users) => {
//     console.log(`users`, users)
//     const firstUseId = users[0]?.id
//     console.log(`firstUseId`, firstUseId)
//     fetch(`${TODOS_URL}?userId=${firstUseId}`)
//       .then((response) => response.json())
//       .then((todos) => {
//         console.log(`todos`, todos)
//       })
//       .catch((error) => {
//         console.log(`error`, error)
//       })
//   })
//   .catch((error) => {
//     console.log(`error`, error)
//   })

//! тот же код на async await
const getTodosWithUserData = async () => {
  try {
    const response = await fetch(USERS_URL)
    if (!response.ok) {
      throw new Error(`Ошибка в получении данных о пользователях`)
    }
    // console.log(`response`, response)
    const users = await response.json()
    console.log(`users`, users)
    const firstUseId = users[0]?.id
    // console.log(`firstUseId`, firstUseId)
    const todosResponse = await fetch(`${TODOS_URL}?userId${firstUseId}`)
    if (!todosResponse.ok) {
      throw new Error(`Ошибка в получении данных о задачах`)
    }
    // console.log(`todosResponse`, todosResponse)
    const todos = await todosResponse.json()
    console.log(`todos`, todos)
  } catch (error) {
    console.log(`error`, error)
  } finally {
    console.log(`finally`)
  }
}
const promise = getTodosWithUserData()
console.log(`promise`, promise)
