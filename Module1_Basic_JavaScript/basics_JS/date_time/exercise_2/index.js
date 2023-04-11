function getDaysBeforeBirthday(nextBirthdayDate) {
  return convertMsToDays(nextBirthdayDate - Date.now())
}

function convertMsToDays(ms) {
  return Math.round(ms / 1000 / 60 / 60 / 24)
}

console.log(getDaysBeforeBirthday(new Date(2023, 8, 7)))
