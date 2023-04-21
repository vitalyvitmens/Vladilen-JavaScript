//! Делегирование событий
// Пример без делегирования (на каждой кнопке свой обработчик события)
// const allNavigationButtons8 = document.querySelectorAll(
//   `.main-navigation__button-item`
// )
// allNavigationButtons8.forEach((button) => {
//   button.addEventListener(`click`, (e) => {
//     const targetButton = e.target
//     allNavigationButtons8.forEach((navButton) => {
//       navButton.classList.remove(`main-navigation__button-item_selected`)
//     })
//     targetButton.classList.add(`main-navigation__button-item_selected`)
//   })
// })

// Пример с делегированием
const allNavigationButtons8 = document.querySelectorAll(
  `.main-navigation__button-item`
)
const mainNavigation8 = document.querySelector(`.main-navigation`)
mainNavigation8.addEventListener(`click`, (e) => {
  console.log(`target`, e.target)
  const isNavButton = e.target.closest(`.main-navigation__button-item`)
  console.log(`КЛИК НА КОНТЕЙНЕР`)
  // console.log(`isNavButton`, isNavButton)
  if (isNavButton) {
    allNavigationButtons8.forEach((navButton) => {
      navButton.classList.remove(`main-navigation__button-item_selected`)
    })
    e.target.classList.add(`main-navigation__button-item_selected`)
  }
})

const firstNavButton8 = document.querySelector(`.main-navigation__button-item`)
firstNavButton8.addEventListener(`click`, (e) => {
  console.log(`ПЕРВАЯ КНОПКА:`, e.target)
})

document.body.addEventListener(`click`, (e) => {
  console.log(`КЛИК НА BODY:`, e.target)
})
