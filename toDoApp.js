/** To Do App */

const myTasks = [{
  text: 'Take out trash',
  completion: false
}, {
  text: 'Buy groceries',
  completion: false
}, {
  text: 'Cleaning',
  completion: true
}, {
  text: 'Feed the dog',
  completion: true
}, {
  text: 'Feed the cat',
  completion: false
},]

// const tasksLeft = myTasks.filter((oneTask) => {
//   // return oneTask.completion // Vráti čo je true (completion === true)
//   // return oneTask.completion === false
//   return !oneTask.completion // Pretože výkričník je negovanie
// })

// const paragraph = document.createElement('p')
// paragraph.textContent = `Remaining tasks: ${tasksLeft.length}`

// document.querySelector('main').appendChild(paragraph)

for (let i = 0; i < myTasks.length; i++) {
  const paragraph = document.createElement('p')
  paragraph.textContent = myTasks[i].text
  document.querySelector('#tasks-found').appendChild(paragraph)
}

const filters = {
  searchText: ""
}

function renderRemainingTasks(tasksDatabase) { /** Vypísanie nesplnených úloh */
  const tasksLeft = tasksDatabase.filter(task => !task.completion)
  const tasksLeftContainer = document.querySelector('#tasks-left')
  tasksLeftContainer.innerHTML = ""

  const remainingInfo = document.createElement('p')
  remainingInfo.textContent = `Remaining tasks: ${tasksLeft.length}`
  tasksLeftContainer.appendChild(remainingInfo)
}

function renderFilteredTasks(tasksDatabase, filters) { /** Filtrovanie v úlohách podľa textu */
  const filteredTasks = tasksDatabase.filter(task =>
    task.text.toLowerCase().includes(filters.searchText.toLowerCase())
  )

  const taskContainer = document.querySelector('#tasks-found')
  taskContainer.innerHTML = ""

  filteredTasks.forEach(task => {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = task.text.trim()
    taskContainer.appendChild(newParagraph)
  })

  renderRemainingTasks(myTasks)
}

const taskInputField = document.querySelector('#input-text') // Chytenie input políčka

taskInputField.addEventListener('input', (event) => {
  filters.searchText = event.target.value // Plníme searchText vo objekte "filters"
  renderFilteredTasks(myTasks, filters)
})

renderFilteredTasks(myTasks, filters) // Po načítaní stránky hneď vypíšeme všetky úlohy aj počet zostávajúcich
