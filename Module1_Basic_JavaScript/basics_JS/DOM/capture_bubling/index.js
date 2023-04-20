const allElements = document.querySelectorAll(`*`)

allElements.forEach((el) => {
  // el.addEventListener(`click`, () => {
  //   alert(`Всплытие: ${el.tagName}`)
  // })
  el.addEventListener(`click`, (e) => {
    if (e.currentTarget.tagName === 'FORM') {
      e.stopPropagation()
    }
    alert(`Всплытие: ${el.tagName}`)
  })
  // el.addEventListener(
  //   `click`,
  //   () => {
  //     alert(`Погружение: ${el.tagName}`)
  //   },
  //   true
  // )
})
