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