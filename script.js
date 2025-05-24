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