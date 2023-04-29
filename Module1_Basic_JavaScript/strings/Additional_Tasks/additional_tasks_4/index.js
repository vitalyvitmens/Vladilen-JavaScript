const isPalindrome = (str) => str === str.split('').reverse().join('')

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('топот')) // true
console.log(isPalindrome('programmer')) // false

function isPalindrome2(str) {
  const strRevers = str.split('').reverse().join('')
  return str === strRevers
}

console.log(isPalindrome2('racecar')) // true
console.log(isPalindrome2('топот')) // true
console.log(isPalindrome2('programmer')) // false
