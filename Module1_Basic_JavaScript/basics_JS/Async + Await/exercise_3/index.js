const DATA_URL = `https://jsonplaceholder.typicode.com/albums`

const createAlbomElement = (text) => {
  const albomElement = document.createElement(`li`)
  const albomElementText = document.createElement(`p`)
  albomElementText.textContent = text
  albomElement.append(albomElementText)

  return albomElement
}

const dataContainer = document.querySelector(`#data-container`)

const renderAlbums = async () => {
  try {
    const requests = await fetch(DATA_URL)
    if (!requests.ok) {
      throw new Error(`Ошибка в получении данных`)
    }
    const responses = await requests.json()
    await responses.forEach((data) =>
      dataContainer.append(createAlbomElement(data.title))
    )
  } catch (error) {
    const err = document.createElement(`h2`)
    err.textContent = `Произошла ошибка в получении данных об альбомах...`
    dataContainer.append(err)
    console.log(error)
  } finally {
    const loader = document.getElementById('loader')
    loader.style.display = 'none'
  }
}

renderAlbums()
