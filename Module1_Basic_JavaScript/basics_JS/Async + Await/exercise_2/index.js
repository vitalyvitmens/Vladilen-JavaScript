const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// Вариант №1
let getAllPromise = async (requests) => {
  return await Promise.all(requests)
}

const getTodosByIds = async (ids) => {
  try {
    const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    const allPromiseRequests = await getAllPromise(requests)
    const dataResults = allPromiseRequests.map((data) => data.json())
    const allTasks = await getAllPromise(dataResults)
    console.log(allTasks)
  } catch (error) {
    console.log(error)
  }
}

getTodosByIds([43, 21, 55, 100, 10])

// Вариант №2
const getTodosByIds2 = async (ids) => {
  try {
    console.log(
      await getAllPromise(
        (
          await getAllPromise(
            await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
          )
        ).map((data) => data.json())
      )
    )
  } catch (error) {
    console.log(error)
  }
}

getTodosByIds2([43, 21, 55, 100, 10])
