/** Document Object Model = DOM */

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