const developerName = 'Maxim'
const programmingLanguage = 'JavaScript'

const programmingLanguages = {
  // javaScript: 'javaScript',
  javaScript: 'JavaScript',
  nodeJS: 'NodeJS',
}

if (programmingLanguage === programmingLanguages.javaScript) {
  console.log(`${developerName} является Front-End разработчиком`)
} else if (programmingLanguage === programmingLanguages.nodeJS) {
  console.log(`${developerName} является Back-End разработчиком`)
} else {
  console.log(
    `Язык программирования у разработчика ${developerName} неопределён`
  )
}
