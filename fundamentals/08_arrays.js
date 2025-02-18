// POLE (ARRAY)

const employees = [`Dávid`, `Michaela`, `Jana`]

console.log(employees)
console.log(employees[0])
console.log(employees[1])
console.log(employees[2])

const data = [`Michaela`, 12, true, 13.5]
console.log(data)
console.log(data[0])
console.log(data[2])
console.log(data[3])

/** Dĺžka pola (nejde od nuly, pozor na to) */

console.log(`Number of employees: ${employees.length}`)

/** Exercise
 * Ako vypísať poslednú hodnotu poľa, keď nepoznáme jeho dĺžku? 
 */

const lastValue = employees.length - 1
console.log(employees[lastValue])

// Riešenie od Davida
console.log(data[data.length - 1])
console.log(data[data.length - 2])

// Moderné riešenie z 2022
console.log(`Modern solution from 2022: ${data.at(-1)}`)

/** Exercise
 * Vytvorte premennú passwords (pole) a uložte do nej 3 stringy. Úlohou je náhodne vybrať jedno heslo. 
 * Pri každom znovunačítaní stránky sa vypíše jedno z týchto troch hesiel.
 */

const passwords = [
    `key number 1`,
    `key number 2`,
    `key number 3`
]

function choosePassword() {
    const value = Math.floor(Math.random() * 3)
    console.log(`Your password is ${passwords[value]}`)
}

choosePassword()

/** Rady od GPT */

function passwordGPT() {
    const randomIndex = Math.floor(Math.random() * passwords.length) // Funkcia bude univerzálnejšia a funkčná, aj keď sa zmení dĺžka poľa
    return passwords[randomIndex]
}

console.log(`Your GPT password is ${passwordGPT()}`) // Je lepšie vrátiť hodnotu z funkcie a ponechať logovanie mimo nej

/** Bonusové zadanie - generujte náhodné číslé 1 - 3 a vyberte hodnotu odzadu (-1) */

function backwardPass() {
    const randomIndex = Math.floor(Math.random() * passwords.length)
    console.log(randomIndex)
    return passwords.at(-randomIndex)
}

console.log(`Your backward password is ${backwardPass()}`)

/** Ďalšia práca s poľom */

const testArray = [1, 2, 3, 4, 5]
console.log(testArray)
console.log(testArray[2])

// Prepísanie prvku v poli
testArray[0] = `New element in the array`
console.log(testArray)

// Pridanie prvku na koniec poľa
testArray.push(6)
testArray.push(`Last element`)
console.log(testArray)

// Odstránenie posledného prvku
testArray.pop()
console.log(testArray)

// Pridanie prvku na začiatok poľa
testArray.unshift(`Zero element`)
console.log(testArray)

// Odstránenie prvku na začiatku poľa
testArray.shift()
console.log(testArray)


/** Metóda SPLICE – pokročilá práca s poľom */
testArray.splice(2, 2) // Prvé číslo znamená, na ktorom prvku má začať, drurhé číslo koľko prvkov má odstrániť
console.log(testArray)

testArray.splice(2, 0, `three`, `four`) // Začni na pozícii 2, vymaž 0 prvkov, dopíš prvky
console.log(testArray)

testArray.splice(-2, 2, `Last`) // Môžeme použiť aj záporné číslo a ísť od konca poľa
console.log(testArray)

console.log(testArray.splice(1, 2)) // Funkcia vráti pole odstránených elementov

/** Exercise
 * 1. Trikrát zavolaj prompt, do ktorého zadáš meno. Tieto mená pridaj na koniec poľa.
 * 2. Potom do toho istého poľa pridaj ďalšie tri mená (znova cez prompt()), ale na začiatok poľa.
 */

const arrayOfNames = []

for (let i = 0; i < 6; i++) { // "i" je index, a ten začína od nuly! 
    const firstName = prompt(`Please, enter your first name`)

    if (arrayOfNames.length < 3) {
        arrayOfNames.push(firstName)
    } else {
        arrayOfNames.unshift(firstName)
    }
}

console.log(`This is our names:
    ${arrayOfNames}`)

