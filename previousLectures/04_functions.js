/** Dilema so stredníkom – dnes je moderné písať čo najmenej kódu */

// FUNKCIE

function firstGreeting() {
    console.log(`This is the first greeting`);
}

firstGreeting()
firstGreeting()
firstGreeting()

let secondGreeting = function () {
    console.log(`This is the second greeting`);
}

secondGreeting()
secondGreeting()
secondGreeting()

// Šípková notácia (arrow function) – kratší kód

let thirdGreeting = () => console.log(`This is the third greeting`);

thirdGreeting()
thirdGreeting()
thirdGreeting()


// PARAMETRY A ARGUMENTY

let squared = function (num) {
    console.log(num * num)
}

squared(2)
squared(5)
squared(10)

let greetingFunction = function (yourName) {
    console.log(`Hi, my name is ${yourName}`)
}

greetingFunction('Michaela')
greetingFunction('Hermione')

/** Exercise 
 * Prepísať funkcie squared a greetingFunction do arrow function 
 */

let squaredArrow = (num) => console.log(num * num)

squaredArrow(3)

let greetingArrow = (yourName) => console.log(`Hi, my name is ${yourName}`)

greetingArrow('Ron')

// RETURN

let squaredReturn = function (num) {
    let result = num * num
    return result
}

let value1 = squaredReturn(5)
value1 = value1 + 50
console.log(value1)

// Skúšam si rôzne zápisy funkcií, aby som zistila, ktorý mi vyhovuje najviac
function add(n) {
    let result = n + 100
    return result
}

let value2 = add(7)
console.log(value2)

/** Exercise 
 * 1. Vytvor funkciu adultChecker, ako parameter zadáte vek. 
 *      - ak je >= 18, tak vráti slovo "adult"
 *      - ak je < 18, tak vráti slovo "child"
 * 2. Pomocou podmienky IF vypíš do konzoly text:
 *      - ak je dospelý - "Check result: adult" a na ďalší riadok "You can enter"
 *      - ak je dieťa - "Check result: child" a na ďalší riadok "You can not enter"
 */

function adultChecker(age) {
    if (age >= 18) {
        let result = 'adult'
        return result
    } else if (age < 18) {
        let result = 'child'
        return result
    } else { console.log(`Please, enter a valid age`) }
}

let ageCheck = adultChecker(20)
console.log(`Check result: ${ageCheck}`)

if (ageCheck === 'adult') {
    console.log(`You can enter`)
} else {
    console.log(`You can not enter`)
}

/** Moje riešenie - napísané "natvrdo" */

function myAdultChecker(age) {
    if (age >= 18) {
        console.log(`My check result: adult`)
        console.log(`You can enter`)
    } else if (age < 18) {
        console.log(`My check result: child`)
        console.log(`You can not enter`)
    } else { console.log(`Please, enter a valid age`) }
}

myAdultChecker('ahoj')

/** Prepísanie do arrow function */

let arrowAgeChecker = (age) => {
    if (age >= 18) {
        console.log(`Arrow check result: adult`)
        console.log(`You can enter`)
    } else if (age < 18) {
        console.log(`Arrow check result: child`)
        console.log(`You can not enter`)
    } else { console.log(`Please, enter a valid age`) }
}

arrowAgeChecker(5)

/** Z týchto troch možných riešení mi iba to prvé umožňuje sa s kódom hrať, upravovať ho, používať opakovanie.
 * Ak platí pravidlo, že čo sa mi objaví v kóde viac ako 1× mám uložiť do premennej, tak prvé riešenie je to najefektívnejšie.
 */

/** Bonusové riešenie - reagujem na vstup od používateľa */

console.log(``)

let promptAge = parseInt(prompt(`How old are you?`), 10);

function promptAdultChecker(promptAge) {
    if (isNaN(promptAge) || promptAge < 0) { // Overuje, či je zadaná hodnota kladné číslo
        let newPromptAge = parseInt(prompt(`Please, enter a valid age`), 10);
        return promptAdultChecker(newPromptAge)
    }

    if (promptAge >= 18) {
        let result = 'adult'
        return result
    } else if (promptAge < 18) {
        let result = 'child'
        return result
    }
}

let promptAgeCheck = promptAdultChecker(promptAge)
console.log(`Prompt check result: ${promptAgeCheck}`)

if (promptAgeCheck === 'adult') {
    console.log(`You can enter`)
} else {
    console.log(`You can not enter`)
}

/** Je možné využiť aj while cyklus, ten je vhodnejší ak by sme očakávali veľké množstvo nesprávnych vstupov.

function promptAdultChecker() {
    while (isNaN(promptAge) || promptAge < 0) {
        promptAge = parseInt(prompt(`Please, enter a valid age:`), 10);
    }

    if (promptAge >= 18) {
        return 'adult';
    } else {
        return 'child';
    }
}

 */

// FUNKCIE – NULL & UNDEFINED

/** Undefined v premennej – keď ju nedefinujeme*/

let age
console.log(age)

if (age === undefined) {
    console.log(`Please, enter a valid age`)
} else {
    console.log(age)
}

/** Undefined ako argument funkcie */

function myFunction1(n) {
    console.log(n)
}

myFunction1() // Výsledok je undefined, pretože funkcia očakáva argument a nie je tam

/** Undefined v return */

function myFunction2(n) {
    return n
}

let value = myFunction2()
console.log(value)

/** Ako som to pochopila:
 * console.log() – funkcia vypočíta undefined a vypíše ho do konzole
 * return – funkcia vypočíta undefined a vráti hodnotu undefined
 */

let commentReply = (n) => n
console.log(commentReply(5))

/** NULL ako priradená hodnota */

let myAge = 30
myAge = null
console.log(myAge)

/** FUNKCIE S VIACERÝMI PARAMETRAMI */

function sum(a, b, c) {
    return a + b + c
}

let valueSum = sum(20, 30, 5)
console.log(valueSum)

/** DEAFULTNÁ (VÝCHODZIA) HODNOTA */

function game(name = 'Anonym', score = 0) {
    console.log(name)
    console.log(score)
    // console.log(name, score) // Môže byť aj tento zápis, ale nie je vhodný ak chceme s hodnotami ďalej pracovať
}

game('Michaela')    // Vypíše sa Michaela a 0, pretože to sme nastavili ako default
game()              // Vypíše sa Anonym a 0
game(undefined, 50) // Vypíše sa Anonym a 50



function game2(name = 'Anonym', score = 0) {
    return `Meno: ${name}, Score: ${score}`
}

let valueGame2 = game2('Micahela', 60)
console.log(valueGame2)


/** Zaujímavosť z komentárov, console.log funguje s čiarkou miesto + a vyrieši to medzery */

let commentName = 'Digestor'
console.log(`Hi, my name is`, commentName) // Vypíše sa Hi, my name is Digestor


/** Exercise 
 * Na dverách kancelárie je tlačidlový displej, ktorý vyžaduje trojmiestny kód pre vstup. Uložte vami zvolený kód
 * do troch premenných. Potom vytvorte funkciu, ktorá bude prijímať tri parametry. Ak sa budú zhodovať so zvoleným kódom,
 * tak konzola vypíše "Môžete vstúpiť," ak nie, tak vypíše "Nesprávne zadaný kód. Skúste to znovu."
*/

let n1 = 1
let n2 = 2
let n3 = 3

function codeCheck(a, b, c) {
    if (a === n1 && b === n2 && c === n3) {
        console.log(`You can enter`)
    } else {
        console.log(`You can not enter, please try again`)
    }
}

codeCheck(1, 2, 3)

