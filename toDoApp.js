/** EventListener */

document.querySelector('a').addEventListener('click', (event) => {
  console.log(`He is alive`)
  console.log(event)
  console.log(event.altKey)
  console.log(event.target)
  console.log(event.target.textContent)
  event.target.textContent = 'It was clicked'
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