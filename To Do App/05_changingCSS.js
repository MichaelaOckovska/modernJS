/** Ako meniť CSS pomocou JS */

const heading = document.querySelector('h1')
console.log(heading)

heading.addEventListener('mouseenter', (event) => {
    heading.style.color = 'green' // Číslo nemusíme dávať do úvodzoviek
})

heading.addEventListener('mouseleave', (event) => {
    heading.style.color = '' 
})

heading.style.fontSize = '30px' // Musí byť string, pretože sú tam i jednotky "px"

// heading.style.display = 'none'

heading.style.fontWeight = 400 // Bold sa udáva v stovkách (100, 200, atď.)


/** Exercise – Moving square with arrow keys */

const square = document.querySelector('.square')

// square.style.top = '50px' 
// square.style.left = '50px' 

let newLeft = null // Mením hodnotu, musí byť "let"!
let newTop = null
document.querySelector('body').addEventListener('keydown', (e) => { // Už som to vzdala, rozumiem, prečo sa často píše len "e"
    if (e.key === 'ArrowLeft') {
        newLeft = newLeft - 10
        square.style.left = `${newLeft}px`
    } else if (e.key === 'ArrowRight') {
        newLeft = newLeft + 10
        square.style.left = `${newLeft}px`
    } else if (e.key === 'ArrowUp') {
        newTop = newTop - 10
        square.style.top = `${newTop}px`
    } else if (e.key === 'ArrowDown') {
        newTop = newTop + 10
        square.style.top = `${newTop}px`
    }
})


/** GetComputedStyle a vytiahnutie vlastností CSS */

const heading = document.querySelector('h1')

const style = getComputedStyle(heading)
console.log(style.color) // Vypíše v rgb notácii
console.log(style.backgroundColor)


/** Exercise – Enter a color in the box and change the background */

const colorForm = document.querySelector('#color-form')
let myBody = document.querySelector('body')

colorForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputColor = e.target.color.value
    
    myBody.style.backgroundColor = inputColor
    e.target.reset()
})

