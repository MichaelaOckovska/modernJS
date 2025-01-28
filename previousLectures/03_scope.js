// LOKÁLNY A GLOBÁLNY SCOPE V JS

let mainCharacter = 'Harry';

if (true) {
    let sideCharacter = 'Neville';
    console.log(mainCharacter);
    console.log(sideCharacter);

    if (true) {
        sideCharacter = 'Luna';
        console.log(sideCharacter);
    }
}

// console.log(sideCharacter); // Nefunguje, pretože je definovaná v lokálnom scope {}

// VARIABLE SHADOWING

// let mainCharacter = 'Hermione'; 
mainCharacter = 'Hermione';

if (true) {
    let mainCharacter = 'Ron';
    let sideCharacter = 'Neville';
    console.log(mainCharacter);
    console.log(sideCharacter);

    if (true) {
        let sideCharacter = 'Ginny';
        console.log(sideCharacter);
    }
}

if (true) {
    console.log(mainCharacter);
}