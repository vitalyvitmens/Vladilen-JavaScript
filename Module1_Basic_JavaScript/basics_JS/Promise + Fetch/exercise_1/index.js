const USERS_URL = `https://jsonplaceholder.typicode.com/users`

const createUserElement = (text) => {
  const userElement = document.createElement(`li`) // создаём тег <li></li>
  const userElementAnchor = document.createElement(`a`) // создаём тег <a></a>
  userElementAnchor.href = `#` // добавляем в тег <a></a> атрибут href="#" <a href="#"></a>
  userElementAnchor.textContent = text // добавляем текс в тег <a></a> он равен параметру text функции createUserElement
  userElement.append(userElementAnchor) // добавляем <a href="#">text</a> в <li></li>

  return userElement // возвращаем полученный элемент пользователя
}

const dataContainer = document.querySelector(`#data-container`)


const getAllUsers = () => {
  const result = fetch(USERS_URL, {
    method: `GET`,
  })

  result
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка запроса`)
      }
      return response.json()
    })
    .then((users) => {
      users.forEach((user) => {
        const userHTML = createUserElement(user.name)
        dataContainer.append(userHTML)
      })
    })
    .catch((error) => {
      console.log(`error`, error)
    })
    .finally(() => {
      const loader = document.getElementById('loader')
      loader.style.display = 'none'
    })
}

getAllUsers()
