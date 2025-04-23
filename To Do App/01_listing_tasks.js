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

console.log(tasksLeft)
console.log(tasksLeft.length)

const paragraph = document.createElement('p')
paragraph.textContent = `Remaining tasks: ${tasksLeft.length}`

document.querySelector('main').appendChild(paragraph)


/** Exercise – List all tasks 
 * Bonus – List only incomplete tasks
*/

const firstSubtitle = document.createElement('h3')
firstSubtitle.textContent = `My solution`
document.querySelector('main').append(firstSubtitle)

myToDos.forEach(task => {
    const taskEl = document.createElement('p')
    taskEl.textContent = task.text
    document.querySelector('main').appendChild(taskEl)
})

/** Solution from video */

const secondSubtitle = document.createElement('h3')
secondSubtitle.textContent = `Solution from video`
document.querySelector('main').append(secondSubtitle)

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