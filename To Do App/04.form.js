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