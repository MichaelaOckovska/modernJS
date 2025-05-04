/** Exercise 
 * Create a simple todo application, where you type a task into the input and it will be printed down with a checkbox.
 */

const form = document.querySelector('#challenge-form')
const output =   document.querySelector('#challenge-form-output')
let count = 0   // Nemôže byť const, keď to potom mením 

/** Poznámka – "let count" musím definovať mimo "addEventListener", pretože ak ho definujem vo vnútri,
 * tak sa po každom kliknutí vytvorí nanovo. To znamená, že vždy bude count 1 (0 + 1), ale nikdy nie 2, 3 atď.
  */

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskInput = event.target.elements.writtenTask
    const paragraph = document.createElement('p')
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    // Miesto ID pre checkbox využijeme "count"
    
    count = count + 1   // Môžem to napísať aj takto: count += 1
    checkbox.id = `task-checkbox-${count}`
       
    const label = document.createElement('label')
    label.setAttribute('for', `task-checkbox-${count}`) // "for" je preddefinované slovo v JS a znamená cyklus, preto ho nemôžem použiť, podľa AI ešte funguje label.htmlFor = ""
    label.textContent = taskInput.value

    paragraph.appendChild(checkbox)
    paragraph.appendChild(label)
    output.appendChild(paragraph)

    event.target.reset()
})

/** Vylepšené riešenie od AI */

// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const taskInput = event.target.elements.writtenTask
//     const paragraph = document.createElement('p')
    
//     const checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'

//     const label = document.createElement('label')
//     label.textContent = taskInput.value
//     label.prepend(checkbox)
    
//     paragraph.appendChild(label)
//     output.appendChild(paragraph)

//     event.target.reset()
// })