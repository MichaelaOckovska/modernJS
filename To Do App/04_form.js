/** Working with FORM */

document.querySelector('#test-form').addEventListener('submit', (event) => {
    // Vypnúť východzie nastavenie formulára
    event.preventDefault()

    // Prístup k obsahu inputu
    const inputContent = event.target.elements.firstName.value
    console.log(inputContent)

    // Vytvoriť odstavec a pridáme do nej text z inputu
    const paragraph = document.createElement('p')
    paragraph.textContent = inputContent

    document.querySelector('#form-output').appendChild(paragraph)

    // Po odoslaní vymazať obsah inputu
    event.target.elements.firstName.value = ""
})


/** Exercise
 * Create any three fields – first name, last name, email
 * Press send – the fields are emptied and the data is written down in paragraphs
 */

// Pri menších formulároch môžem ísť cez querySelector()
// const inputContent = {
//     fistName: document.querySelector('[name="firstName"]'),
//     lastName: document.querySelector('[name="lastName"]'),
//     email: document.querySelector('[name="email"]'),
// }

document.querySelector('#test-form').addEventListener('submit', (event) => {
    event.preventDefault()

    const formElements = event.target.elements
    const formData = {
        firstName: formElements.firstName.value,
        lastName: formElements.lastName.value,
        email: formElements.email.value,
    }

    Object.values(formData).forEach((input) => {
        const paragraph = document.createElement('p')
        paragraph.textContent = `${input}`
        document.querySelector('#form-output').appendChild(paragraph)
    })

    event.target.reset() // Ak je k niečomu preddefinovaná funkcia, je lepšie používať tú
})


/** Checkbox */

const myCheckBox = document.querySelector('#my-check-box')
myCheckBox.addEventListener('change', (event) => {
    event.target.checked
})


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

