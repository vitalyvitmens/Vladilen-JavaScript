let health = Number(
  prompt('Введите число параметра "здоровье" для персонажа').trim()
)
console.log('health', health, typeof health)
if (health <= 0 || !health) {
  debugger
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`)
  debugger
}
