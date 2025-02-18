// KONŠTANTY

const adult = false
// adult = true // Vyhodí chybu, že sa snažíme prepísať konštantu

console.log(adult) 

/** Konštatny a objekty */

const person = {
    name: `Michaela`,
    age: 34
}

// person = {} // Nemôžeme pracovať s objektom ako celkom = chyba

person.age = 38 // Môžeme meniť parametre objektu

console.log(person)

 /** Rozdiel medzi var a let – môžeme viackrát definovať rovnakú premennú, let nám to neumožní = chyba */

 var age = 30
 var age = 40 

 console.log(age)

/** Premenné let a var v bloku */

if (true) {
    let number = 5
    console.log(number)
}

// console.log(number) // Snažíme sa pracovať s premennou mimo scope, v ktorom sme ju definovali = chyba

if (true) {
    var number = 5
    console.log(`Výpis pomocou var v scope ${number}`)
}

console.log(`Výpis pomocou var mimo scope ${number}`)  // Premenná var nás pustí

/** Čudnosti var */

// console.log(value) // Snažíme sa vypísa value skôr ako ju definujeme = chyba
let value = 10

console.log(valueVar) // Nevyhodí chybu, ale vypíše undefined
var valueVar = 10

 
/** Bonus – farebný text v konzoly  */

console.log(`%c Text, ktorý chcem farebne `, `color:rgb(28, 155, 117); font-weight: bold; background: #fff`)

