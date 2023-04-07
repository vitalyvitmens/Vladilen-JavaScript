const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]

function giveParcel(array) {
  const nameShift = array.shift()
  if (nameShift.includes('на') || nameShift.includes('ия')) {
    alert(
      `${nameShift} получила посылку. В очереди осталось ${array.length} человек.`
    )
  } else {
    alert(
      `${nameShift} получил посылку. В очереди осталось ${array.length} человек.`
    )
  }
}

function leaveQueueWithoutParcel(array) {
  const namePop = array.pop()
  if (namePop.includes('на') || namePop.includes('ия')) {
    alert(`${namePop} не получила посылку и ушла из очереди.`)
  } else {
    alert(`${namePop} не получил посылку и ушел из очереди.`)
  }
}

giveParcel(peopleWaiting)
giveParcel(peopleWaiting)
giveParcel(peopleWaiting)

leaveQueueWithoutParcel(peopleWaiting)
leaveQueueWithoutParcel(peopleWaiting)
leaveQueueWithoutParcel(peopleWaiting)
leaveQueueWithoutParcel(peopleWaiting)
