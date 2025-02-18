// OBJEKTY

let book = {
    title: `Harry Potter and the Philosopher's stone`,
    author: 'J. K. Rowling',
    published: 1997
}

console.log(book) // Zaujímavosť – do konzole sa hodoty vypíšu zoradené abecedne

console.log(book.title) // Tento zápis sa volá "dot notation"
console.log(book.author)
console.log(book.published)

console.log(`${book.title} was written by ${book.author} and was was published in ${book.published}`)


/** Zmeny vlastnosti v objekte */

book.title = 'Harry Potter and the Chamber of Secrets'
book.published = 1998

console.log(book.title)
console.log(`${book.title} was written by ${book.author} and was published in ${book.published}`)

/** Exercise
 * Definujte tri objekty, ktoré budú predstavovať konkrétnych ľudí. Každý objekt (človek) bude mať hodnoty meno, 
 * vek a mesto, v ktorom žije. Do konzole vypíšte tri vety: "Volám sa ..., mám ... rokov a pochádzam z mesta..."
 */

let person1 = {
    name: 'Harry Potter',
    age: 14,
    city: 'Surrey'
}

let person2 = {
    name: 'Hermione Granger',
    age: 15,
    city: 'London'
}

let person3 = {
    name: 'Ron Weasley',
    age: 16,
    city: 'Devon'
}

console.log(`Hi, my name is ${person1.name}, I am ${person1.age} years old, and I am from ${person1.city}`)
console.log(`Hi, my name is ${person1.name}, I am ${person1.age} years old, and I am from ${person1.city}`)
console.log(`Hi, my name is ${person3.name}, I am ${person3.age} years old, and I am from ${person3.city}`)

console.log(`Alternative notation:
Hi, my name is ${person1.name}, I am ${person1.age} years old, and I am from ${person1.city}.
Hi, my name is ${person2.name}, I am ${person2.age} years old, and I am from ${person2.city}.
Hi, my name is ${person3.name}, I am ${person3.age} years old, and I am from ${person3.city}.`)

/** Vylepšenie z komentárov */

let person = [person1, person2, person3]

for (let i = 0; i < 3; i++) {
    console.log(`Hi, my name is ${person[i].name}, I am ${person[i].age} years old, and I am from ${person[i].city}.`)
}

/** Vypisovanie objektov pomocou funkcie */

let firstBook = {
    title: `Harry Potter and the Philosopher's stone`,
    author: 'J. K. Rowling',
    published: 1997
}

let secondBook = {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    published: 1998
}

function myBooks(book) { // "book" sa pri volaní funkcie nahradí vybraným objektom (firstBook, secondBook)
    console.log(`The book written by ${book.author} was published in ${book.published} and is called ${book.title}`)
}

myBooks(firstBook)
myBooks(secondBook)

/** Exercise
 * Vezmite 3 objekty z predchájúcej úlohy a vypíšte ich pomocou funkcie.
 */

person1 = {
    name: 'Harry Potter',
    gender: 'male',
    age: 14,
    city: 'Surrey'
}

person2 = {
    name: 'Hermione Granger',
    gender: 'female',
    age: 15,
    city: 'London'
}

person3 = {
    name: 'Ron Weasley',
    gender: 'male',
    age: 16,
    city: 'Devon'
}

function personInfo(person) {
    if (person.gender === 'male') {
        console.log(`In this game, ${person.name} will play. He is ${person.age} years old and comes from ${person.city}`)
    } else if (person.gender === 'female') {
        console.log(`In this game, ${person.name} will play. She is ${person.age} years old and comes from ${person.city}`)
    } else {
        console.log(`This person is an idiot, choose one gender!`)
    }

}

personInfo(person1)
personInfo(person2)
personInfo(person3)

console.log('')

person = [person1, person2, person3] // Musím to znova deklarovať, inak to berie pôvodné objekty (bez gender)

for (let i = 0; i < person.length; i++) {
    personInfo(person[i])
}

/** Zápis v súlade s DRY – vylepšenie z komentárov */

function personInfoDRY(person) {
    console.log(`In this DRY game, ${person.name} will play. ${person.gender === 'male' ? 'He' : 'She'} is ${person.age} years old and comes from ${person.city}`)
}

for (let i = 0; i < person.length; i++) {
    personInfoDRY(person[i])
}

/** Comment correct */

let aboutThem = (person) => {
    let sex2
    if (person.gender === "female") {
        sex2 = "jí"
    } else {
        sex2 = "mu"
    }

    console.log(`Jmenuje se ${person.name}, je ${sex2} ${person.age} let a bydlí v ${person.city}.`)
}

aboutThem(person1)
aboutThem(person2)
aboutThem(person3)

/** OBJEKTY A PREMENNÉ */

let myName = 'Michaela'
let myObject = {
    firstName: myName, // Premennú môžeme zadávať aj ako hodnotu
    secondName: 'Očkovská',
    age: 29
}

console.log(myObject.firstName)

/** OBJEKTY A RETURN */

let thirdBook = {
    title: `Harry Potter and the Prisoner of Azkaban`,
    author: 'J. K. Rowling',
    published: 1999
}

let fourthBook = {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
    published: 2000
}

function bookInfo(book) {
    // return book.title
    return {
        basicInfo: `${book.title} by ${book.author}`,
        publishing: `Published in ${book.published}`
    }
}

let result = bookInfo(firstBook)
console.log(result)

result = bookInfo(thirdBook)
console.log(result.basicInfo)
console.log(result.publishing)

/** OBJEKTY A METÓDY - metódy sú funkcie priradené k objektu */

person1 = {
    fisrtName: 'Harry',
    secondName: 'Potter',
    gender: 'male',
    age: 14,
    height: 165 + ' cm',

    greet: function () {
        console.log(`Ahoj`)
    },
    toWork: function (job) {
        if (job === undefined) {
            return `I don't go to work, I'm still a student.`
        }
        return `I work as a ${job}`
    }
}

console.log(person1.fisrtName)
console.log(person1.height)

person1.greet()

result = person1.toWork()
console.log(result)

result = person1.toWork('teacher at Hogwarts')
console.log(result)

/** Exercise
 * Vytvorte objekt s názvom "škola," bude mať tieto vlastnosti:
 *  - typ (napr. gymnázium, obchodná akadémia atď.)
 *  - ulica 
 *  - mesto
 *  - kapacita
 * 
 * 1. Vypíšte typ a mesto do konzoly.
 * 2. Napíšte metódu, ktorá nám hovorí či je škola otvorená alebo zatvorená.
 */

let school = {
    name: 'Hogwarts',
    type: 'School of witchcraft and wizardry',
    city: 'The Highlands of Scotland',
    capacity: 500,

    availableCapacity(capacity) {
        // if (capacity > 500) {
        //     console.log(`${this.name} ${this.type} is closed`)
        // } else {
        //     console.log(`${this.name} is open`)
        // }
        console.log(`${this.name} ${this.type} is ${capacity > 500 ? 'close' : 'open'}`) // Ternary operator
    }
}

console.log(school.type)
console.log(school.city)

school.availableCapacity(510)
school.availableCapacity(350)

/** Exercise
 * 1. Vytvorte premennú "vládne nariadenie" a priraďte jej hodnotu true/false.
 * 2. Vytvorte objekt škola s dvoma metódami open a closed, ak vládne nariadenia platia, škola je zatvorená (a naopak).
 *    Výsledok vypíšte do konzoly.
 */

let governmentRegulations = true

school = {
    name: 'Hogwarts',
    type: 'School of witchcraft and wizardry',
    city: 'The Highlands of Scotland',
    capacity: 500,

    regulationCheck() {
        if (typeof governmentRegulations !== 'boolean') {
            throw new Error(`Invalid value: govermentRegulation must be a boolean`)
        }
    },
    open() {
        console.log(`Information: ${this.name} ${this.type} is open`)
    },
    close() {
        console.log(`Information: ${this.name} ${this.type} is closed`)
    },
    handleRegulation() { 
        this.regulationCheck()
        if (governmentRegulations) { // Nemusí byť podmienka governementRegulations === true, v tomto prípade je to zbytočné
            this.close()
        } else {
            this.open()
        }
    }
}

school.handleRegulation()

/** Moderný zápis našej úlohy */

school = {
    name: 'Hogwarts',
    type: 'School of witchcraft and wizardry',
    city: 'The Highlands of Scotland',
    capacity: 500,

    open() {
        if (typeof governmentRegulations !== 'boolean') {
            throw new Error(`Invalid value: governmentRegulation must be a boolean`)
        }
        console.log(`Regulation check: ${this.name} ${this.type} is ${governmentRegulations ? 'close' : 'open'}`)
    }
}

school.open()

