function getDaysBeforeBirthday(nextBirthdayDate) {
  return convertMsToDays(nextBirthdayDate - Date.now())
}

function convertMsToDays(ms) {
  return Math.round(ms / 1000 / 60 / 60 / 24)
}

console.log(getDaysBeforeBirthday(new Date(2023, 8, 7)))

//! Решение:
const convertMsToDays2 = (ms) => Math.round(ms / 1000 / 60 / 60 / 24)

const getDaysBeforeBirthday2 = (birthdayDate) => {
  if (!(birthdayDate instanceof Date)) {
    return 'Параметр функции должен быть экземпляром класса Date!'
  }
  const currentDateMs = Date.now()
  const birthdayDateMs = birthdayDate.getTime()
  return convertMsToDays2(birthdayDateMs - currentDateMs)
}
