const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// Вариант №1
let getAllPromise = async (requests) => {
  return await Promise.all(requests)
}

const getTodosByIds = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
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
          await getAllPromise(ids.map((id) => fetch(`${TODOS_URL}/${id}`)))
        ).map((data) => data.json())
      )
    )
  } catch (error) {
    console.log(error)
  }
}

getTodosByIds2([43, 21, 55, 100, 10])

//! Решение от Result School
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//             console.log(allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// getTodosByIds([43, 21, 55, 100, 10]);

const getTodosByIds3 = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    const responses = await Promise.all(requests);
    const allTasks = await Promise.all(responses.map((data) => data.json()));
    console.log("allTasks", allTasks);
  } catch (error) {
    console.error(error);
  }
};

getTodosByIds3([43, 21, 55, 100, 10]);
