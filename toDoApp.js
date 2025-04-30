/** To Do App */

const tasksDatabase = [{
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

const tasksLeft = tasksDatabase.filter((oneTask) => {
  // return oneTask.completion // Vráti čo je true (completion === true)
  // return oneTask.completion === false
  return !oneTask.completion // Pretože výkričník je negovanie
})

const paragraph = document.createElement('p')
paragraph.textContent = `Remaining tasks: ${tasksLeft.length}`

document.querySelector('main').appendChild(paragraph)

for (let i = 0; i < tasksDatabase.length; i++) {
  const paragraph = document.createElement('p')
  paragraph.textContent = tasksDatabase[i].text
  document.querySelector('#tasks-found').appendChild(paragraph)
}

/*****************************************************************/

/** Exercise
 * Searching in the task list – similar to previous exercise
 */

// function filterTask(tasks, searchText) {
//   const container = document.querySelector('#tasks-found')
//   container.innerHTML = ""

//   const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchText.toLowerCase()))

//   filteredTasks.forEach(task => {
//     const newParagraph = document.createElement('p')
//     newParagraph.textContent = task.text.trim()

//     container.appendChild(newParagraph)
//   })
// }

// const taskNameInput = document.querySelector('#input-text') // Chytenie input políčka

// taskNameInput.addEventListener('input', (event) => {
//   const searchText = event.target.value
//   filterTask(tasksDatabase, searchText)
// })


/** Verzia s objektom filters */

const filters = {
  searchText: ""
}

function renderFilteredTasks(allTasks, filters) {
  const container = document.querySelector('#tasks-found')
  container.innerHTML = ""

  const filteredTasks = allTasks.filter(task => task.text.toLowerCase().includes(filters.searchText.toLowerCase()))

  filteredTasks.forEach(task => {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = task.text.trim() 

    container.appendChild(newParagraph)
  })
}

const taskInputField = document.querySelector('#input-text') // Chytenie input políčka

taskInputField.addEventListener('input', (event) => {
  filters.searchText = event.target.value
  renderFilteredTasks(tasksDatabase, filters)
})