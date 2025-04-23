/** EventListener */

document.querySelector('a').addEventListener('click', (event) => {
  console.log(`He is alive`)
  console.log(event)
  console.log(event.altKey)
  console.log(event.target)
  console.log(event.target.textContent)
  event.target.textContent = 'It was clicked'
})