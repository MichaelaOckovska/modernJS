/** To Do App */

const myToDos = [{
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

const tasksLeft = myToDos.filter((oneTask) => {
  // return oneTask.completion // Vráti čo je true (completion === true)
  // return oneTask.completion === false
  return !oneTask.completion // Pretože výkričník je negovanie
})

console.log(tasksLeft.length)

const paragraph = document.createElement('p')
paragraph.textContent = `Remaining tasks: ${tasksLeft.length}`

document.querySelector('main').appendChild(paragraph)

for (let i = 0; i < 4; i++) { } // Pamätaj, JS počíta od nuly

for (let i = 0; i < myToDos.length; i++) {
  const paragraph = document.createElement('p')
  paragraph.textContent = myToDos[i].text
  document.querySelector('main').appendChild(paragraph)
}

/** List just incomplete tasks */

const thirdSubtitle = document.createElement('h3')
thirdSubtitle.textContent = `Incomplete tasks`
document.querySelector('main').append(thirdSubtitle)

for (let i = 0; i < myToDos.length; i++) {
  const paragraph = document.createElement('p')
  if (myToDos[i].completion === false) {
      paragraph.textContent = myToDos[i].text
      document.querySelector('main').appendChild(paragraph)
  }
}

document.querySelector('.myBtn').addEventListener('click', (event) => {
  console.log('Click succeed')
})


/** Výber selectorov */

const buttons = document.querySelectorAll('button')

console.log(buttons)
console.log(buttons[0]) // Riziko, že sa zmení poradie elementov (tlačidiel)
console.log(buttons[1])

buttons[0].addEventListener('click', (event) => {
  console.log(`Click on first button.`)
})

buttons[1].addEventListener('click', (event) => {
  console.log(`Click on second button.`)
})

const firstBtn = document.querySelector('.first-btn')
const secondBtn = document.querySelector('.second-btn')

firstBtn.addEventListener('click', (event) => {
  console.log(`Click on first buttonClass.`)
})

secondBtn.addEventListener('click', (event) => {
  console.log(`Click on second buttonClass.`)
})