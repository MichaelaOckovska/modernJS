/** LocalStorage */

/** Adding item to LocalStorage */
localStorage.setItem('location', 'Nitra')
localStorage.setItem('firstName', 'Harry')

/** Update item - pracuje už s existujúcou položkou */
localStorage.setItem('location', 'Praha')
localStorage.setItem('firstName', 'Ron')

/** Getting item */
console.log(localStorage.getItem('location'))
console.log(localStorage.getItem('firstName'))

/** Deleting item */
// localStorage.removeItem('location')
// localStorage.removeItem('firstName')

/** Deleting all items */
// localStorage.clear()

// Do value môžeme zadávať mnoho informácií, napríklad aj objekty. Ale so všetkým pracuje ako so stringom (aj s číslami).


/** JSON – converstion methods
 * JSON nám pomôže previesť všetko, čo potrebujeme, na string a uložiť to v localStorage.
 * Funguje to aj obrátene, keď vytiahneme informácie z localStorage, prejde to cez JSON a ten ich prevedie na pôvodné hodnoty.
 * 
 * JSON.stringyfy – prevod hodnoty alebo objektu na JSON string 
 * JSON.parse – analyzuje reťazec JSON a vytvorí hodnotu alebo objekt opísaný týmto reťazcom
 * 
 * Ide o statické metódy v jazyku JavaScript
*/

const character = {
    firstName: 'Harry',
    age: 17
}

const userJSON = JSON.stringify(character) // Ak píšem JSON v premenných, tak zvyčajne sa píše veľkými písmenami
console.log(userJSON)

localStorage.setItem('character', userJSON)

const userFromLS = JSON.parse(localStorage.getItem('character'))
console.log(userFromLS)

console.log(`Hi, my name is ${userFromLS.firstName} and was ${userFromLS.age} when i killed Voldemort.`)


/** Ukladanie dát z poľa do LocalStorage */

const myArray = JSON.parse(localStorage.getItem('users')) || []

const myForm = document.querySelector('#localStorage-frm')
myForm.addEventListener('submit', (e) => {
    e.preventDefault() // Vypnutie automatického načítania stránky, pamätaj na to 

    const firstName = e.target.elements.firstName.value
    myArray.push(firstName)

    const myArrayToLS = JSON.stringify(myArray)
    localStorage.setItem('users', myArrayToLS)

    e.target.reset()

    /** Vyťahovanie dát z LocalStorage */

    // Pokračujeme stále v tejto funkcii, aby sa všetko vykonalo po akcii "submit"

    // const myArrayFromLS = localStorage.getItem('characters') // Vytiahnutie z localStorage
    // const myArrayFromLSJson = JSON.parse(myArrayFromLS) // Prechod cez JSON

    const myArrayFromLS = JSON.parse(localStorage.getItem('users'))

    const paragraph = document.createElement('p')
    paragraph.textContent = myArrayFromLS[myArrayFromLS.length - 1]

    document.querySelector('#users-div').appendChild(paragraph)
})

const myParsedArray = JSON.parse(localStorage.getItem('users')) || []

myParsedArray.forEach(user => {
    const paragraph = document.createElement('p')
    paragraph.textContent = user

    document.querySelector('#users-div').appendChild(paragraph)
})


