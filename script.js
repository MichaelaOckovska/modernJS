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
localStorage.clear()

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

const user = {
    firstName: 'Harry',
    age: 17
}

const userJSON = JSON.stringify(user) // Ak píšem JSON v premenných, tak zvyčajne sa píše veľkými písmenami
console.log(userJSON)

localStorage.setItem('user', userJSON)

const userFromLS = JSON.parse(localStorage.getItem('user'))
console.log(userFromLS)

console.log(`Hi, my name is ${userFromLS.firstName} and was ${userFromLS.age} when i killed Voldemort.`)