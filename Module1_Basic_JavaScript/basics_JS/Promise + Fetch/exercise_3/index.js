const PHOTOS_URL = `https://jsonplaceholder.typicode.com/photos`

const createPhotoElement = (url, title) => {
  const photoElement = document.createElement(`li`)
  photoElement.className = `photo-item`
  const photoElementImage = document.createElement(`img`)
  photoElementImage.className = `photo-item__image`
  photoElementImage.src = url
  const photoElementTitle = document.createElement(`h3`)
  photoElementTitle.className = `photo-item__title`
  photoElementTitle.textContent = title
  photoElement.append(photoElementImage, photoElementTitle)

  return photoElement
}

const dataContainer = document.querySelector(`#data-container`)

const getFastestLoadedPhoto = (ids) => {
  const requests = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`))
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => response.json())
      return Promise.race(dataResults)
    })
    .then((photo) => {
      console.log(`photo:`, photo)
      const photoHTML = createPhotoElement(photo.url, photo.title)
      dataContainer.append(photoHTML)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      const loader = document.getElementById('loader')
      loader.style.display = 'none'
    })
}

getFastestLoadedPhoto([60, 12, 55])
