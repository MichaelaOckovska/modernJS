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
})