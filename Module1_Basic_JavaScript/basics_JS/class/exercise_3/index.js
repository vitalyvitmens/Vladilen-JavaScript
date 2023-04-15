class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    const objWord = (this.words[word] = {})
    if (!(objWord.hasOwnProperty(word) === word)) {
      objWord['word'] = word
      objWord['description'] = description
    }
  }

  remove(key) {
    delete this.words[key]
  }

  get(key) {
    return this.words[key]
  }

  showAllWords() {
    for (let key in this.words) {
      console.log(`${Object.values(this.words[key])}`)
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
// dictionary.remove('JavaScript')
console.log(dictionary.get('Веб-разработчик'))
dictionary.showAllWords()

console.log(dictionary)
