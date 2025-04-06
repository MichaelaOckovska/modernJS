/** Adds and removee elements from the DOM */

const newParagraph = document.createElement('p') 
newParagraph.textContent = `Text of new paragraph`

console.log(newParagraph.outerHTML)

document.querySelector('header').appendChild(newParagraph)                               