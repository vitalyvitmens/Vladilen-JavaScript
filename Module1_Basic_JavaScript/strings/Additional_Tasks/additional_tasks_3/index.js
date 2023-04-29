const unique = (arr) => [...new Set(arr)]
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])) // => [1, 2, 4, 3, 7]

function unique2(arr) {
  const setArr = new Set(arr)
  return [...setArr]
}

console.log(unique2([1, 1, 2, 2, 4, 2, 3, 7, 3])) // => [1, 2, 4, 3, 7]

// 1 способ
function unique3(arr) {
  return arr.filter((el, idx, arr) => arr.indexOf(el) === idx)
}

console.log(unique3([1, 1, 2, 2, 4, 2, 3, 7, 3]))

// 2 способ
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

function unique4(arr) {
  return [...new Set(arr)]
}

console.log(unique4([1, 1, 2, 2, 4, 2, 3, 7, 3]))
