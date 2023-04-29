//! Напишите функцию, которая принимает в аргументах 2 строки. Она должна возвращать true, если эти строки состоят из одинаковых букв, и false, если нет.
console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false

function sortfunction(str) {
  return str.split('').sort().join('')
}

function isEqualSymbols(str1, str2) {
  if (sortfunction(str1) === sortfunction(str2)) {
    return true
  } else {
    return false
  }
}

console.log(isEqualSymbols2("адрес", "среда")); // true
console.log(isEqualSymbols2("ноутбук", "программист")); // false

function isEqualSymbols2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const strSymb1 = str1.split("").sort().join("");
  const strSymb2 = str2.split("").sort().join("");

  return strSymb1 === strSymb2;
}
