// STRING - METHODS AND PROPERTIES

let fisrtName = 'Michaela'

/** Dĺžka stringu */

console.log(fisrtName.length)

/** Veľké písmená */

console.log(fisrtName.toUpperCase())

/** Ďalšie metódy pri práci so stringom */

console.log(fisrtName.toLowerCase())

let sentence = 'Hi, my name is Michaela'
console.log(sentence.includes(fisrtName))

let surname = ' David Šetek  '
console.log(surname.trim()) // Odstraňuje tzv. whitespaces (nadbytočné medzery, tabulátory, riadky, atď.) na koncoch reťazca, vypíše 'David Šetek'

/** Exercise 
 * Vytvorte kontrolu hesla s nasledujúcimi podmienkami: 
 *  - ak má > 13 znakov - konzola vypíše "Veľmi silné heslo"
 *  - ak má > 8 < 13 (vrátane) - konzola "Silné heslo"
 *  - ak má < 8 - konzola "Slabé heslo"
 *
 * Zistite, či má heslo obsahuje za sebou idúce znaky 1234
 *  - true - "Heslo nesmie obsahovať 1234"
 *  - false - "Heslo je v poriadku" 
*/

function passwordCheck(password) {
    let passLenght = password.length
    let passRestriction = 1234

    if (password.includes(passRestriction)) {
        console.log(`The password must not contain ${passRestriction}`)
    } else if (passLenght > 13) {
        console.log(`Very strong password`)
    } else if (passLenght >= 8 && passLenght <= 13) { // passLenght <= 13 už nie je nutné, pretože to je ošetrené prvou podmienkou
        console.log(`Strong password`)
    } else {
        (console.log(`Weak password, please choose a strong one`))
    }
}

passwordCheck('fsvdrfg')


// NUMBER - METHODS AND PROPERTIES

let n = 3.9455

console.log(n.toFixed(3)) // Zobrazenie čísiel za desatinnou bodkou, so správnym zaokrúhlením 

/** Metódy a properties na objekte Math */

console.log(Math.round(n)) // Zaokrúhlenie na celé čísla
console.log(Math.floor(n)) // Zaokrúhlenie vždy dolu
console.log(Math.ceil(n)) // Zaokrúhlenie vždy hore

/** Náhodné čísla */

console.log(Math.random()) // Náhodné číslo 0 - 1
console.log(Math.random() * 10) // Viac ako jedna

console.log(Math.ceil(Math.random() * 10)) // Mechceme desatinné čísla, môžeme zaokrúhlovať aj dolu (záleží na kontexte, napr. virtuálna kocka nám nemôže hodiť 0)
console.log(Math.ceil(Math.random() * 6)) // Náhodné číslo 1 - 6, môžeme použiť rôzne čísla

// Náhodné číslo z intervalu
let min = 15
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/** Vysvetlenie
Jednoduše řečeno, trik spočívá v tom, že se nejdříve vygeneruje číslo od 0 do 5:
Math.floor(Math.random() * (max - min + 1))

K výsledku se připoče 15:
+ min

Pokud se týká toho Math.floor(Math.random() * (max - min + 1)):
Tady se vygeneruje číslo mezi 0 a 5.9 a výsledek se zaokrouhlí tím floor dolů na celé číslo. Kdyby tam nebylo 
to + 1, tak by to generovalo jen čísla do od 0 do 4.9, takže by to nikdy nevyplyvlo 5, což by neplnilo zadání.

*/

/** Exercise
 *1.  Hráč hodil 6× kockou. Našou úlohou je sčítať všetkých 6 pokusov:
 *      - ak je výsledok > 25, konzola vypíše "víťaz" 
 *      - ak je to menej, konzola "skús znova svoje šťastie"
 * 
 * 2. Na vhodnom mieste vypíšte celkový súčet všetkých pokusov
 */

function diceroll() { return Math.ceil(Math.random() * 6) }
// let diceroll = () => Math.ceil(Math.random() * 6) // Prepis do arrow function

let game = diceroll() * 6

let n1 = diceroll()
let n2 = diceroll()
let n3 = diceroll()
let n4 = diceroll()
let n5 = diceroll()
let n6 = diceroll()

let sum = n1 + n2 + n3 + n4 + n5 + n6
console.log(`Your final result is ${game}`)

if (game >= 25) {
    console.log(`Congratulation, you win!`)
} else {
    console.log(`Try your luck again`)
}

let attempt = diceroll() * 6 // Nesprávne riešenie! Nesimuluje samostatné hody kockou, ale náhodné číslo 1 - 6 vynásobí 6×
console.log(attempt)

