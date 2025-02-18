// PODMIENKY

let age = 68;

if (age >= 18 && age < 65) {
    console.log(`You are an adult`);
} else if (age < 18) {
    console.log(`You are a child`);
} else if (age >= 65) {
    console.log(`You are a senior`);
} else if (age > 110) {
    console.log(`You are dead`);
}

let firstName = 'Michaela';

if (firstName === 'Michaela') {
    console.log(`Hi, Michaela`);
} else {
    console.log(`I do not know you`);
}


/** Môj prvý IT prank 
let yourName = prompt('Hi, what is your name?');
let yourAge = parseInt(prompt('How old are you?'), 10);

if (yourAge === 32) {
    console.log('Hi, ' + yourName + ', you are dead');
} else if (yourAge >= 18 && yourAge < 65) {
    console.log('Hi, ' + yourName + ', you are an adult');
}
else if (yourAge < 18) {
    console.log('Hi, ' + yourName + ', you are a child');
} else if (yourAge >= 65) {
    console.log('Hi, ' + yourName + ', you are a senior');
} */

firstName = 'David';
let greetings = (`Hi ${firstName}, you can enter`);

if (firstName === 'David') {
    console.log(greetings);
} else if (firstName === 'Martin') {
    console.log(greetings);
} else if (firstName === 'Jana') {
    console.log(greetings);
} else {
    console.log(`You do not have permission to enter`);
}

/** Exercise
 * V zamestnaní máte aplikáciu, ktorá generuje otázky pri pohovore. A aplikácii sa na začiatku zadáva,
 * o akú pozíciu ide. Ak ide o pozíciu:
 *  - programátor: "Aký je rozdiel medzi HTML a JS?"
 *  - administrátor: "Aké poznáte druhy sietí?"
 *  - sekretárka: "Aké poznáte funkcie v exceli?"
 */

// let workPosition = prompt(`What position are you applying for?`);
let addWorkPosition = 'Programmer';
let workPosition = addWorkPosition.toLowerCase();

if (workPosition === 'programmer') {
    console.log(`What is the difference between HTML and JS?`);
} else if (workPosition === 'administrator') {
    console.log(`What types of networks do you know?`);
} else if (workPosition === 'secretary') {
    console.log(`What functions do you know in Excel?`);
} else {
    console.log(`We do not have a position open for you.`);
}

// LOGICKÉ OPERÁTORY AND & OR

/**Exercise
 * V dome máte aplikáciu na reguláciu teploty. Displej vypisuje:
 *  - chladno - ak je menej ako 10°C
 *  - teplo - ak je medzi 11°C – 25°C
 *  - horúco - ak je viac ako 26°C
 */

let temperature = 11.5;

if (temperature <= 10) {
    console.log(`It's cold at your house`);
} else if (temperature >= 11 && temperature <= 25) {
    console.log(`It's warm at your house`);
} else if (temperature >= 26) {
    console.log(`It's hot at your house`);
}

// Ak by tu nešlo o precvičovanie logických operátorov, toto by bol lepší zápis

if (temperature < 11) {
    console.log(`cold`)
} else if (temperature > 25) {
    console.log(`hot`)
} else {
    console.log(`warm`)
}

/**Exercise
 * Svedok zločinu popísal páchateľa, ktorý mal viac ako 190 cm a váhu viac ako 100 kg. Z databáze zločincov
 * máte vyfiltrovať osoby, ktoré odpovedajú tomuto popisu. Keďže svedkovi nemôžete dôverovať, vypíšete z databáze
 * aj ľudí ktorí spĺňajú len jeden parameter.
 */

let height = 180;
let weight = 120;

if (height >= 190 || weight >= 100) {
    console.log(`He's a suspect`);
} else {
    console.log(`He's not a suspect`);
}