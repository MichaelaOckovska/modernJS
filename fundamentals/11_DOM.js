/** Document Object Model = DOM */

/** Searching  */

// querySelector()
const heading = document.querySelector('h1')
console.log(heading)

const paragraph = document.querySelector('p')
console.log(paragraph)

// querySelectorAll()
const allParagraphs = document.querySelectorAll('p')
console.log(allParagraphs)
console.log(allParagraphs[0])
console.log(allParagraphs[1])

// getElementById()
const myId = document.getElementById('btn')
console.log(myId)

// getElementsByClassName()
const myClass = document.getElementsByClassName('paragraph')
console.log(myClass)
console.log(myClass[0])
console.log(myClass[1])

// Finding ID and Classes by querySelector()
const myIdQS = document.querySelector('#btn')
const myClassQS = document.querySelector('.paragraph')

console.log(`This is selector by ID`, myIdQS)
console.log(`This is selector by class`, myClassQS)

/** Exercise
 * Vyber pomocou selektoru element a vypíš ho do konzoly.
 */

console.log(`
    Exercise time
    `)

// Nadpis H1, querySelector()
const testHeading = document.querySelector('h1')
console.log(testHeading)

// ID, querySelector()
const testId = document.querySelector('#byID')
console.log(testId)

// Všetky nadpisy H2, querySelectorAll(), každý zvlášť
const testHeading2 = document.querySelectorAll('h2')
console.log(testHeading2[0])
console.log(testHeading2[1])

// Všety odstavce s triedou "test", querySelectorAll(), každý zvlášť
const testParagraph = document.querySelectorAll('.test')
console.log(testParagraph[0])
console.log(testParagraph[1])

// Všety odstavce s triednou "test", getElementByClassName(), každý zvlášť
const paragraphByClass = document.getElementsByClassName('test')
console.log(`By getElement:`, paragraphByClass[0])
console.log(`By getElement:`, paragraphByClass[1])

//ID, getElementById()
const paragraphById = document.getElementById('byID')
console.log(`By getElement:` ,paragraphById)


/** How JS works with DOM */

const heading2 = document.querySelector('h1')
console.log(heading2.textContent) // Vezme text a ignoruje tagy – can prevvent XSS attacks
console.log(heading2.innerText)   // Vezme text a ignoruje tagy
console.log(heading2.innerHTML)   // Vezme celé vnútorné HTML aj s tagmi

heading2.textContent = 'New title for my website'
console.log(heading2)

heading2.textContent = 'Rubber duck JS' // Correcting my title after lecture

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph) => console.log(paragraph))
paragraphs.forEach((paragraph) => console.log(paragraph.textContent))

// paragraphs.forEach((paragraph) => {
//     paragraph.textContent = `***`
//     console.log(paragraph.textContent)
// })

/** Remove elements according to content  */

const tasks = document.querySelectorAll('.task')

tasks.forEach((task) => {
    if (task.textContent.toLowerCase().includes('feed')) {
        task.remove()
    } else { console.log(task) }
})

