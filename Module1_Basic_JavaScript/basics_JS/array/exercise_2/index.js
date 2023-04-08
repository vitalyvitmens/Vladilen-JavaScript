function getSumOfSequence(number) {
  const array = []
  for (let i = 1; i <= number; i += 1) {
    array.push(i)
  }
  if (
    (Number(number) === number && Number.isInteger(number)) ||
    number === undefined
  ) {
    if (array.length > 1) {
      return array[0] + array[array.length - 1]
    } else if (array.length === 1) {
      return array[0]
    } else {
      return 'array is empty'
    }
  } else {
    return 'must be an integer of type Number'
  }
}

console.log(getSumOfSequence(5))
