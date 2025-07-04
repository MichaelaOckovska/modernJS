/** EventListener – docs "mdn element" */

document.querySelector('a').addEventListener('click', (event) => {
  console.log(`He is alive`)
  console.log(event)
  console.log(event.altKey)
  console.log(event.target)
  console.log(event.target.textContent)
  event.target.textContent = 'It was clicked'
})

document.querySelector('.myBtn').addEventListener('click', (event) => {
  console.log('Click succeed')
})


/** Exercise
 * In index.html create a heading h1, h2 and h3. In all of them will be any text. For all headings, set
 * that will change the text to "Click below". The result will be that if you click on h1, this will change
 * the text and you need to click on heading h2 etc.
 */

// document.querySelector('h1').addEventListener('click', (event) => {
//   console.log(event.target.textContent)
//   event.target.textContent = 'Click below'
// })

// document.querySelector('h2').addEventListener('click', (event) => {
//   console.log(event.target.textContent)
//   event.target.textContent = 'Click below'
// })

// document.querySelector('h3').addEventListener('click', (event) => {
//   console.log(event.target.textContent)
//   event.target.textContent = 'Click below'
// })

document.querySelectorAll('h1, h2, h3').forEach((element) => {
  element.addEventListener('click', (event) => {
    console.log(event.target.textContent)
    event.target.textContent = 'Click below'
  })
})


/** Výber selektorov */

const buttons = document.querySelectorAll('button')

console.log(buttons)
console.log(buttons[0]) // Riziko, že sa zmení poradie elementov (tlačidiel)
console.log(buttons[1])

buttons[0].addEventListener('click', (event) => {
  console.log(`Click on first button.`)
})

buttons[1].addEventListener('click', (event) => {
  console.log(`Click on second button.`)
})


const firstBtn = document.querySelector('.first-btn')
const secondBtn = document.querySelector('.second-btn')

firstBtn.addEventListener('click', (event) => {
  console.log(`Click on first buttonClass.`)
})

secondBtn.addEventListener('click', (event) => {
  console.log(`Click on second buttonClass.`)
})


/** EventListener – input */

const input = document.querySelector('#input-text')

input.addEventListener('change', (event) => { // Musím kliknúť niekam inam aby zmenu zaregistroval
  console.log(`The Boy who Lived!`)
  console.log(event)
  console.log(event.target.value)
})

input.addEventListener('input', (event) => { // Zaregistruje každú zmenu (doslova po písmenku)
  console.log(event.target.value)
})


/** Ďalšie eventy */

/** Dropdown menu – select, change, option */

const select = document.querySelector('#selectID')

select.addEventListener('change', (event) => {
    console.log(event.target.value)
})


/** Events – mouseenter, mouseleave, keydown, keypress, keyup */

const buttonEvent = document.querySelector('#btn')

buttonEvent.addEventListener('mouseenter', (event) => {
    console.log('mouseenter')
})

buttonEvent.addEventListener('mouseleave', (event) => {
    console.log('mouseleave')
})

/** Keyboard eventy nemá */

const allBody = document.querySelector('body')

// allBody.addEventListener('keydown', (event) => { 
//     console.log('keydown')
// })

// allBody.addEventListener('keypress', (event) => { 
//     console.log('keypress')
// })

allBody.addEventListener('keyup', (event) => {
    console.log(event.key)
})