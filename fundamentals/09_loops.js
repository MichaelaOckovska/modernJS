/** CYKLY */

/** POLE A CYKLUS forEach */

const hogwartsStudents = [`Michaela`, `Harry`, `Hermione`, `Ron`, `Draco`]

hogwartsStudents.forEach(function () { // Zvykni si písať () => keď je funkcia parameter inej funkcie
    console.log(`We are testing`)
})

hogwartsStudents.forEach(() => console.log(`We are testing`))

hogwartsStudents.forEach((person123) => console.log(person123)) // Miesto "person123" môžem napísať čokoľvek

hogwartsStudents.forEach((person, index) => console.log(index, person)) // Aj miesto index môžem napísať čokoľvek, pozor na zakázané slová


/** Exercise
 * Vytvorte zoznam úloh a uložte doň 4 úlohy (vyvenčiť psa, kúpiť kečup, vymaľovať izbu, urobiť si desiatu)
 * Položky poľa vypíšte v nasledujúcom tvare => "1. vyvenčiť psa"
 */

const toDO = [`walk the dog`, `buy ketchup`, `paint the room`, `make a snack`]
console.log(`1. ${toDO[0]}`)
console.log(`2. ${toDO[1]}`)
console.log(`3. ${toDO[2]}`)
console.log(`4. ${toDO[3]}`)
console.log(``)

toDO.forEach((task, n) => console.log(`${n + 1}. ${task}`))


/** CYKLUS FOR – univerzálnejší ako forEach */

for (let i = 0; i <= 5; i++) { // Nemusí to byť len "i"
    console.log(`Testing text`)
}

for (let j = 1; j <= 5; j++) {
    console.log(`${j}. Testing text`)
}

/** OBRÁTENÝ CYKLUS FOR */

for (let k = 5; k >= 0; k--) {
    console.log(k)
}

/** Výpis poľa pomocou "for" */

const employees = [`Harry`, `Hermione`, `Ron`]

for (let l = 0; l < 3; l++) {
    console.log(employees[l])
}

employees.push(`Neville`)
employees.push(`Luna`)

for (let i = 0; i < employees.length; i++) {
    console.log(`New student: ${employees[i]}`)
}

/** Exercise
 * 1. Vytvore toDo zoznam s úlohami: zostrihať video, upratať izbu, povysávať, v tvare "1. zostrihať video"
 * 2. Vytvorte prázdne pole a pomocou cyklu ho naplňte číslami od 0 do 4, vypíšte do konzoly
 */

const toDo = [`cut the video`, `clean the room`, `vacuum`]

for (let i = 0; i < toDo.length; i++) {
    const n = 1 + i
    console.log(`${n}. ${toDo[i]}`)
}

const numbers = []

for (let j = 0; j < 5; j++) {
    numbers.push(j)
    console.log(numbers[j])
}

