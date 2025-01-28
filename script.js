/** POLE A indexOf() – zistí na ktorej pozícii v poli sa nachádza daný prvok */

const employees = ['Harry', 'Hermione', 'Ron']

console.log(employees.indexOf('Harry'))
console.log(employees.indexOf('Hermione'))
console.log(employees.indexOf('Ron'))

if (employees.indexOf('David') === -1) { // Ak prvok v poli nenájde, vráti "-1"
    console.log(`User not found`)
} else {
    console.log(`The user has been found`)
}

if (employees.indexOf('Harry') !== -1) { // Rozlišuje aj veľké a malé písmená
    console.log(`The user has been found`)
} else {
    console.log(`User not found`)
}

/** POLE OBJEKTOV A indexOf() */

const books = [{
    title: `Harry Potter and the Philosopher's stone`,
    author: `J. K. Rowling`,
    published: 1997
}, {
    title: `Harry Potter and the Chamber of Secrets`,
    author: `J. K. Rowling`,
    published: 1998
}, {
    title: `Harry Potter and the Prisoner of Azkaban`,
    author: `J. K. Rowling`,
    published: 1999
}, {
    title: `Harry Potter and the Goblet of Fire`,
    author: `J. K. Rowling`,
    published: 2000
}, {
    title: `Harry Potter and the Order of the Phoenix`,
    author: `J. K. Rowling`,
    published: 2003
}, {
    title: `Harry Potter and the Half-Blood Prince`,
    author: `J. K. Rowling`,
    published: 2005
}, {
    title: `Harry Potter and the Deathly Hallows`,
    author: `J. K. Rowling`,
    published: 2007
}]

console.log(books)      // Vypíšu sa všetky objekty, každý je vnímaný ako prvok poľa
console.log(books[0])   // Vypíše sa prvý objekt

console.log(books[0].title)
console.log(books[0].author)
console.log(books[0].published)

console.log(books.indexOf({})) // Vráti -1, pretože porovnáva odkazy v pamäti a nie obsah

const data = { // Odkaz na obsah
    title: `Harry Potter and the Deathly Hallows`, // Obsah uložený v pamäti
    author: `J. K. Rowling`,
    published: 2007
}

const data2 = data
console.log(data2)

data2.title = 'New title' // Konštanty "data" aj "data2" sú LEN ODKAZY na obsah v pamäti, cez "data2" sme tento obsah zmenili. Preto vidíme zmenu, aj keď zavoláme odkaz "data"
console.log(data)


/** POLE OBJEKTOV A findIndex() – vráti index prvého prvku, ktorý splní podmienku */

// Vysvetlenie findIndex() na bežnom poli
const numbers = [8, 11, 8, 20, 39]
let result = numbers.findIndex((number) => number > 15)
console.log(result) // V našom prípade vráti 3


// Ako to funguje v poli objektov
result = books.findIndex((book) => book.published === 1998)

console.log(result)
console.log(books[result])


/** Exercise
 * Pomocou metódy prompt() zadaj krstné meno podozrelého a do konzoly vypíš všetky jeho údaje (každý údaj na jeden riadok).
 * Podľa mena nájdi daný objekt a ten vypíš. K nájdeniu objektu použi findIndex()
 */

const criminals = [{
    firstName: 'Martin',
    surname: 'Zelený',
    birth: 1985,
    address: 'U sloupů 16',
    city: 'České Budějovice'
}, {
    firstName: 'Jana',
    surname: 'Růžová',
    birth: 1996,
    address: 'Malská 29',
    city: 'České Budějovice'
}, {
    firstName: 'Filip',
    surname: 'Modrý',
    birth: 1989,
    address: 'Stevardská 38',
    city: 'České Budějovice'
}]

// const yourInput = prompt(`Please enter the name of the person you are looking for.`)
const yourInput = 'Jana'

const index = criminals.findIndex((criminal) => criminal.firstName === yourInput)

const ourSuspect = criminals[index]

if (index !== -1) {
    console.log(`
    Name: ${ourSuspect.firstName}
    Surname: ${ourSuspect.surname}
    Birth: ${ourSuspect.birth}
    Address: ${ourSuspect.address}
    City: ${ourSuspect.city}
`)
} else {
    alert(`The person you are looking for is not in our database. Make sure you have entered the correct name and try again.`)
}

// Riešenie z komentárov ktoré ma zaujalo – vypíše všetkých podozrivých s hľadaným menom

for (let i = 0; i < criminals.length; i++) {
    if (criminals[i].firstName === yourInput) {
        console.log(criminals[i])
    }
}

/** POLE OBJEKTOV A find() – vráti prvý prvok, ktorý splní podmienku */

// Vysvetlenie find() na bežnom poli
const myArray = [1, 3, 20, 2, 8]
result = myArray.find((number) => number > 4) // Plníme funkciou, použila som () =>
console.log(result)


// Ako to funguje v poli objektov – pracujem s poľom books[]
const esult = books.find((book) => {
    if (book.published === 1999) {
        return book // Metóda find() vráti vždy celé pole
    }
})

console.log(result.title)

/** Generátor náhodných slov z komentárov 
 * Po kliknutí na tlačidlo vygeneruj náhodné slovo z poľa. Zabezpeč, aby sa to isté slovo nezobrazilo dvakrát za sebou.
 * Po každom kliknutí na tlačidlo sa zobrazí iné slovo, než bolo zobrazené predtým.
*/

const randomWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
let lastWord = null

function getRandomWord() {
    let newWord

    do {
        newWord = randomWords[Math.floor(Math.random() * randomWords.length)]
    } while (newWord === lastWord)
    lastWord = newWord
    return newWord
}

function repeat(times) {
    for (let i = 0; i < times; i++) {
        console.log(getRandomWord())
    }
}

repeat(6)

/** POLE OBJEKTOV A filter() – filtrovanie v poli*/

// Vysvetlenie filter() na bežnom poli
const names = ['Jana', 'Anna', 'Naděžda', 'David']
const arrayResults = names.filter((name) => {
    const finding = name.toLowerCase().includes('na') // JS je case sensitive, t.j. použijem toLowerCase() aby bolo všetko napísané malým písmom
    console.log(finding) // Vracia to true || false
    return finding      // Uloží výsledok do premennej arrayResults 
})

console.log(arrayResults)

// Ako to funguje v poli objektov – pracujem s poľom books[]
let findBook = books.filter((book) => {
    const finding = book.author.includes('Row')
    return finding
})

console.log(findBook)

/** Exercise
 * Nájdi knihy vydané pred rokom 2000 a vypíš ich názvy.
 */

findBook = books.filter((book) => {
    const finding = book.published.toString().includes('19')
    return finding
})

findBook.forEach((book) => console.log(book.title))

// Rada od chatGPT – efektívnejší zápis
findBook = books.filter((book) => book.published < 2000)
findBook.forEach((book) => console.log(`GPT ${book.title}`))

// Filtrovanie podľa rkou vydania a názvu knihy
findBook = books.filter((book) => {
    const findPublished = book.published < 2000
    const findTitle = book.title.toLowerCase().includes('of')
    return findPublished && findTitle
})

findBook.forEach((book) => console.log(`Found ${book.title}`))

// Skúšam skrátený zápis
findBook = books.filter((book) => book.published < 2000 && book.title.toLowerCase().includes('of'))
findBook.forEach((book) => console.log(`New finding: ${book.title}`))


// Comment reply – dá sa 