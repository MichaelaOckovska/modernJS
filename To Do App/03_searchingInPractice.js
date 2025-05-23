/** Exercise
 * Mám databázu zločincov, potrebujem z nej vytiahnuť údaje na základe vyhľadávania Licence Plate.
 */

const suspectsDatabase = [{
    firstName: 'Martin',
    surname: 'Zelený',
    birth: 1985,
    licencePlate: '85C3322',
    address: 'U sloupů 16',
    city: 'České Budějovice'
}, {
    firstName: 'Jana',
    surname: 'Růžová',
    birth: 1996,
    licencePlate: '93K3922',
    address: 'Malská 29',
    city: 'České Budějovice'
}, {
    firstName: 'Anna',
    surname: 'Modrá',
    birth: 1989,
    licencePlate: '2EP6328',
    address: 'Stevardská 38',
    city: 'České Budějovice'
}]

// // Uložiť data z "input"

// let filters = {
//     searchText: ""
// }

// // Filtrovanie

// const renderCriminals = (wantedCriminals, tryToFind) => {
//     let arrayResult = wantedCriminals.filter((oneSuspect) => {
//         return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
//     })

//     document.querySelector('#idCriminal').innerHTML = ""

//     arrayResult.forEach((oneSuspect) => {
//         let paragraph = document.createElement('p')
//         // paragraph.textContent = `First Name: ${oneSuspect.firstName}, Surname: ${oneSuspect.surname}`
//         paragraph.innerHTML = `
//         First Name: ${oneSuspect.firstName}, <br> 
//         Surname: ${oneSuspect.surname}, <br> 
//         Birth: ${oneSuspect.birth}, <br>
//         Licence Plate: ${oneSuspect.licencePlate}, <br>
//         Address: ${oneSuspect.address}, <br>
//         City: ${oneSuspect.city}, <br>
//         `

//         document.querySelector('#idCriminal').appendChild(paragraph)
//     })
// }

// // Načítať dáta z "input"

// let licencePlate = document.querySelector('#licence-plate')
// licencePlate.addEventListener('input', (event) => {
//     filters.searchText = event.target.value
//     renderCriminals(suspects, filters) // Volanie funkcie s parametrami

// })


/** Moje riešenie – s pomocou AI */

// Funkcia na vypísanie filtrovaných zločincov
function renderCriminals(criminals, searchText) {
    const container = document.querySelector('#idCriminal')
    container.innerHTML = "" // Vyčistí staré výsledky predtým, ako tam vložíme nové

    const filtered = criminals.filter(criminal =>
        criminal.licencePlate.toLowerCase().includes(searchText.toLowerCase())
    )

    filtered.forEach(criminal => {
        const paragraph = document.createElement('p')
        paragraph.innerHTML = `
        First Name: ${criminal.firstName}<br>
        Surname: ${criminal.surname}<br>
        Birth: ${criminal.birth}<br>
        Licence Plate: ${criminal.licencePlate}<br>
        Address: ${criminal.address}<br>
        City: ${criminal.city}<br>
        `.trim() // Odstráni whitespace

        container.appendChild(paragraph)
    })

    if (filtered.length === 0) {
        const noResult = document.createElement('p')
        noResult.textContent = "No results found."
        container.appendChild(noResult)
    }
}

// Event listener na input
const licencePlateInput = document.querySelector('#licence-plate')

licencePlateInput.addEventListener('input', (event) => {
    const searchText = event.target.value
    renderCriminals(suspectsDatabase, searchText)
})


/** Exercise
 * Searching in the task list – similar to previous exercise
 */

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

  