const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

//! For
for (let i = 0; i < developerNames.length; i += 1) {
  console.log('i', i)
  console.log('item', developerNames[i])
}

//! For of
for (const name of developerNames) {
  console.log('name', name)
}

//! forEach
developerNames.forEach((name, index, array) => {
  console.log('name', name)
  console.log('index', index)
  console.log('array', array)
})
