/** Exercise */

const criminals = [{
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
    firstName: 'Anna',
    surname: 'Modrá',
    birth: 1989,
    licencePlate: '2EP6328',
    address: 'Stevardská 38',
    city: 'České Budějovice'
}]

// Uložiť data z "input"

let filters = {
    searchText: ""
}

// Filtrovanie

const renderCriminals = (wantedCriminals, tryToFind) => {
    let arrayResult = wantedCriminals.filter((oneSuspect) => {
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })

    console.log(arrayResult)

    document.querySelector('#idCriminal').innerHTML = ""

    arrayResult.forEach((oneSuspect) => {
        let paragraph = document.createElement('p')
        // paragraph.textContent = `First Name: ${oneSuspect.firstName}, Surname: ${oneSuspect.surname}`
        paragraph.innerHTML = `
        First Name: ${oneSuspect.firstName}, <br> 
        Surname: ${oneSuspect.surname}, <br> 
        Birth: ${oneSuspect.birth}, <br>
        Licence Plate: ${oneSuspect.licencePlate}, <br>
        Address: ${oneSuspect.address}, <br>
        City: ${oneSuspect.city}, <br>
        `

        document.querySelector('#idCriminal').appendChild(paragraph)
    })
}

// Načítať dáta z "input"

let licencePlate = document.querySelector('#licence-plate')
licencePlate.addEventListener('input', (event) => {
    filters.searchText = event.target.value
    renderCriminals(criminals, filters) // Volanie funkcie s parametrami

})