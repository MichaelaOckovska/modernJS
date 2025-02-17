/** POLE A indexOf() – zistí index hľadaného prvku */

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
result = books.find((book) => {
    if (book.published === 1999) {
        return book // Metóda find() vráti vždy celý objekt
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
    const finding = book.published.toString().includes('19') // Toto je zbytočné, čísla sa môžu porovnávať operátormi (< 2000)
    return finding
})

findBook.forEach((book) => console.log(book.title))

// Rada od chatGPT – efektívnejší zápis
findBook = books.filter((book) => book.published < 2000)
findBook.forEach((book) => console.log(`GPT ${book.title}`))

// Filtrovanie podľa roku vydania a názvu knihy
findBook = books.filter((book) => {
    const findPublished = book.published < 2000
    const findTitle = book.title.toLowerCase().includes('of')
    return findPublished && findTitle
})

findBook.forEach((book) => console.log(`Found ${book.title}`))

// Skúšam skrátený zápis
findBook = books.filter((book) => book.published < 2000 && book.title.toLowerCase().includes('of'))
findBook.forEach((book) => console.log(`New finding: ${book.title}`))


/** Exercise
 * Svedok videl z miesta vraždy odchádzať auto. Vie iba to, že ŠPZ obsahovala 22. Úlohou je v uvedenej databáze kriminálnikov
 * nájsť tých, kt. majú v ŠPZ 22. Všetky ich údaje vypíš do konzoly v tvare:
 *      - Meno
 *      - Priezvisko
 *      - Rok narodanie, atď.
 * 
 * Hľadaný výraz získaj pomocou promptu (v tomto prípade 22).
 */

const suspects = [{
    firstName: 'Martin',
    surname: 'Zelený',
    birth: 1985,
    licencePlate: '85C3322',
    address: 'U sloupů 16',
    city: 'České Budějovice'
}, {
    firstName: 'Jana',
    surname: 'Růžová',
    birth: 1996,
    licencePlate: '93K3922',
    address: 'Malská 29',
    city: 'České Budějovice'
}, {
    firstName: 'Filip',
    surname: 'Modrý',
    birth: 1989,
    licencePlate: '2EP6328',
    address: 'Stevardská 38',
    city: 'České Budějovice'
}]

// const input = prompt(`Please enter the part of the licence plate you are looking for.`)
const input = '22KK'

const findSuspect = suspects.filter((suspect) => suspect.licencePlate.toLowerCase().includes(input))

findSuspect.forEach((suspect) => console.log(`
Name: ${suspect.firstName}
Surname: ${suspect.surname}
Birth: ${suspect.birth}
Licence Plate: ${suspect.licencePlate}
Address: ${suspect.address}
City: ${suspect.city}`)
)

// Experimentujem s deštrukturalizáciou objektov
findSuspect.forEach(({ firstName, surname, birth, licencePlate, address, city }) =>
    console.log(`
    Name: ${firstName}
    Surname: ${surname}
    Birth: ${birth}
    Licence Plate: ${licencePlate}
    Address: ${address}
    City: ${city}`)
)

/** Comment reply – vypíš do konzoly upozornenie, ak neboli nájdené žiadne výsledky */

if (findSuspect.length > 0) {
    findSuspect.forEach((suspect) => {
        console.log(` New
Name: ${suspect.firstName}
Surname: ${suspect.surname}
Birth: ${suspect.birth}
Licence Plate: ${suspect.licencePlate}
Address: ${suspect.address}
City: ${suspect.city}`)
    })
} else {
    console.log(`No results found in the database`)
}


/** Pole objektov a radenie */

const sortNames = ['Anna', 'Cecília', 'Barbora'] // Obyčajné pole strings
console.log(sortNames)

sortNames.sort()
console.log(sortNames)

const sortNumbers = [1, 8, 3, 2, 15, 5] // Obyčajné pole numbers
sortNumbers.sort()
console.log(sortNumbers)


// Pole objektov – pracujem so suspects
function sortArray(arraySuspects) {
    arraySuspects.sort((a, b) => { // Má dva argumenty (a, b), pretože funguje tak, že vezme dva prvky z poľa objektov (v našom prípade podľa surname) a porovnáva ich medzi sebou
        if (a.surname.toLowerCase() < b.surname.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.surname.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortArray(suspects)
console.log(suspects)

// Pole objektov – čísla
function sortNumbersArray(numbers) {
    numbers.sort((a, b) => { 
        if (a < b) {
            return -1
        } else if (b < a) {
            return 1
        } else {
            return 0
        }
    })
}

sortNumbersArray(sortNumbers)
console.log(sortNumbers)