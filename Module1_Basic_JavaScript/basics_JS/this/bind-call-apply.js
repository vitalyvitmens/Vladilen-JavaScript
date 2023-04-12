const mainHero = {
  fullName: 'SpiderMan',
  health: 65,
  strength: 5,
}

const badHero = {
  fullName: 'Joker',
  health: 55,
  strength: 10,
}

function printHeroInfo(extraInfo = '') {
  console.log(
    `Name: ${this.fullName}, Health: ${this.health}, Strength: ${this.strength}, ${extraInfo}`
  )
}

//! bind, call, apply
printHeroInfo.call(mainHero, 'Роль: Главный герой')
printHeroInfo.call(badHero, 'Роль: Злодей')

printHeroInfo.apply(mainHero, ['Роль: Главный герой'])
printHeroInfo.apply(badHero, ['Роль: Злодей'])

printHeroInfo.bind(mainHero, 'Роль: Главный герой')()
printHeroInfo.bind(badHero, 'Роль: Злодей')()
