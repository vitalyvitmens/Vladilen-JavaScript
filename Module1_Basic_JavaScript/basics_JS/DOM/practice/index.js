document.addEventListener('keydown', (e) => {
  const { key } = e
  const img = document.querySelector(`img`)
  const p = document.querySelector(`[data-id="${key}"]`)
  if (p) {
    img.src = `https://pobasenki.ru/wp-content/uploads/2018/06/122.jpg`
    img.style.width = `73%`
    p.style.fontWeight = `bold`
    p.style.color = `blue`
    p.style.fontSize = `2rem`
    p.textContent = `Я не считаю вас глупым, но я могу ошибаться!`
  }
})

document.addEventListener('keyup', (e) => {
  const { key } = e
  const img = document.querySelector(`img`)
  const p = document.querySelector(`[data-id="${key}"]`)
  if (p) {
    img.style.width = `0px`
    p.style.fontWeight = `normal`
    p.style.color = `black`
    p.style.fontSize = `16px`
    p.textContent = `Нажми 1 на клавиатуре`
  }
})

const paragraphs = document.querySelectorAll(`p`)

paragraphs.forEach((p) => {
  p.addEventListener(`mouseover`, (e) => {
    e.target.style.fontWeight = `bold`
  })
  p.addEventListener(`mouseout`, (e) => {
    e.target.style.fontWeight = `normal`
  })
})
