/** EventListener */

document.querySelector('a').addEventListener('click', (event) => {
  console.log(`He is alive`)
  console.log(event)
  console.log(event.altKey)
})