console.log('We are learning javaScript');

let firstName = 'Michaela';
let surname = 'Očkovská';
let city = 'Zlín';
console.log(firstName + ' ' + surname + ', ' + city);

/** Exercise
 * 1. Do premennej firstName ulož svoje krstné meno.
 * 2. Do premennej job ulož svoje zamestnanie.
 * 3. Vypíš do konzoly 'Ahoj, volám sa ... a pracujem ako ...'
 */

firstName = 'Sabina';
let job = 'QA Tester';
console.log('Hi, my name is ' + firstName + ' and I am working as ' + job);

let numberX = 15;
let numberY = 20;
console.log(numberX, numberY);

let age = 29;
console.log('I am ' + age + ' years old');

// Matematické operácie
let x = age + 6;
console.log(x);

/** Exercise
 * 1. Do premennej age ulož svoj vek.
 * 2. Vypíš do konzoly 'Volám sa ... a mám ...'
 * 3. Vypíš do konzoly 'Za 5 rokov budem mať ...'
 */

let today = new Date();
console.log(today);

let birthDate = new Date(1995, 3, 15);
console.log(birthDate);

let currentAge = today.getFullYear() - birthDate.getFullYear();
let birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
if (today < birthdayThisYear) {
    currentAge--;
}
console.log('My name is ' + firstName + ' and I am ' + currentAge + ' years old');

let y = currentAge + 5;
console.log('I will be ' + y + ' years old in five years');

/** Tiež fungujú tieto zápisy
console.log('I will be ' + (currentAge + 5) + ' years old in five years');
console.log(`I will be ${currentAge + 5} years old in five years`);
*/

console.log('Today I am ' + currentAge + ' years old and in five years I will be ' + y + ' years old');

/** Exercise
 * 1. Vytvor dve premenné student1 a student2. Do premenných ulož dosiahnutý počet bodov z testu (ľubovoľné čísla, ale menšie ako 100).
 * 2. Do premenných študentov ulož mená.
 * 3. Vypočítaj úspešnosť v %, ak je maximálny počet bodov 100.
 * 4. Vypíš pre oboch študentov výsledky v tvare: "... mal/a ... % úspešnosť"
 * 5. Vylepšienie - ak pri výpočte úspešnosti delíte maximálnym počtom bodov (100), tak si toto číslo ulož do premennej s názvom maxPoints a nahraď výpočet touto premennou.
 */

let maxPoints = 100;
let student = {
    student1: { name: 'Michal', points: 50 },
    student2: { name: 'Sandra', points: 75 }
}

let succesRateMichal = (student.student1.points * 100) / maxPoints;
console.log(student.student1.name + ' achieved ' + succesRateMichal + ' % success');

let succesRateSandra = (student.student2.points * 100) / maxPoints;
console.log(student.student2.name + ' achieved ' + succesRateSandra + ' % success');

// Boolean example

age = 21;
let adult = age >= 18;
console.log(adult);

/** Exercise
 * 1. Do premennej age ulož ľubovoľný vek. 
 * 2. Do ďalších troch premenných child, adult, senior uložte true/false podľa podmienok:
 *      - child > 18
 *      - adult <= 18 (pozn. tu musí byť menej ako 65)
 *      - senior <= 65
 */

let yourAge = 18;
let child = yourAge < 18;
let adultPerson = yourAge >= 18 && yourAge < 65;
let senior = yourAge >= 65;

console.log('You are child: ' + child);
console.log('You are adult ' + adultPerson);
console.log('You are senior ' + senior);

// TEMPLATE STRINGS

let myName = 'Harry Potter'
let myAge = 15
console.log(`Hi, my name is ${myName} and I am ${myAge} years old`)  

// PROMPT

prompt(`Please, enter your name`) // Interakcia s používateľom, vyskočí okno, do ktorého môžeme zadať svoj vstup
