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
  document.querySelector('main').appendChild(paragraph)
}


