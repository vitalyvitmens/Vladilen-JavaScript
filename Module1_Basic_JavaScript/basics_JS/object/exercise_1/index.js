const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
]

const onlineUsers = users.reduce((usersOnlineNamesArray, key) => {
  if (key.status === 'online') {
    usersOnlineNamesArray.push(key.username)
  }
  return usersOnlineNamesArray
}, [])

const usersOnlineNames = onlineUsers.join(', ')
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)
