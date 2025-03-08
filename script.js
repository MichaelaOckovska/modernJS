/** How JS works with text */

const heading = document.querySelector('h1')
console.log(heading.textContent) // Vezme text a ignoruje tagy – can prevvent XSS attacks
console.log(heading.innerText)   // Vezme text a ignoruje tagy
console.log(heading.innerHTML)   // Vezme celé vnútorné HTML aj s tagmi

heading.textContent = 'New title for my website'
console.log(heading)

heading.textContent = 'Rubber duck JS' // Correcting my title after lecture



