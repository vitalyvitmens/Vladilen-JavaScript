class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    if (!this.words.hasOwnProperty(word)) {
      this.words[word] = { word, description }
    }
  }

  remove(word) {
    delete this.words[word]
  }

  get(word) {
    return this.words[word]
  }

  showAllWords() {
    for (let key of Object.keys(this.words)) {
      console.log(`${key} - ${this.words[key].description}`)
    }
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
)
dictionary.add('JavaScript', '77')
dictionary.add('JavaScript', '78')
dictionary.add('JavaScript', '79')
dictionary.add('Dart', 'язык программирования для фрэймворка Flutter')
dictionary.showAllWords()
dictionary.remove('Dart')

console.log(dictionary.get('Веб-разработчик'))
console.log(dictionary)
