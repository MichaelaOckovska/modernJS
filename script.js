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