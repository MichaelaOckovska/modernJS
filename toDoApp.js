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

