let numOfClicks = 0
const div = document.querySelector('div')
div.addEventListener('click', (event) => {
  ++numOfClicks
  const p = event.target.closest('p')
  if (p) {
    if (numOfClicks % 2 !== 0) {
      p.style.color = 'red'
      p.style.fontWeight = 'bold'
    } else {
      p.style.color = 'black'
      p.style.fontWeight = 'normal'
    }
  }
})
