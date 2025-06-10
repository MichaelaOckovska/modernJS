/** Scrollovanie */

window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY
    const documentLength = document.documentElement.scrollHeight
    const innerHeight = window.innerHeight   // Obsah stránky/okna, kde neskrolujeme (to čo vidíme hneď po otvorení okna)
    const scrollable = documentLength - innerHeight

    // console.log(scrollable) // Maximálna dĺžka skrolovania
    // console.log(scrolled)   // Aktuálna dĺžka skrolovania

    if (scrolled === scrollable) {
        alert('You have reached the bottom of the page!')
    }

    // if (Math.ceil(scrolled) === scrollable) { // Ak by som potrebovala zaokrúhliť na celé čísla
    //     alert('You have reached the bottom of the page!')
    // }

    /** Samozrejme, nemusíme dôjsť až na koniec. Týmto spôsobom môžeme nastaviť "urob niečo" v ľubovoľnom momente počas skrolovania. */
})


/** Button "Nahor" */

window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY
    const documentLength = document.documentElement.scrollHeight // Celková dĺžka dokumentu
    const scrollable = documentLength - window.innerHeight

    // if (scrolled === scrollable) { // Ak by mi to nefungovalo, skúsiť zaokrúhliť
    //     const upBtn = document.querySelector('.up-btn')
    //     upBtn.style.display = 'block'
    // }

    if (Math.ceil(scrolled) > 400) {
        const upBtn = document.querySelector('.up-btn')
        upBtn.style.display = 'block'

        upBtn.addEventListener('click', (e) => {
            upBtn.style.display = 'none'
        })
    }
})


/** Plynulé skrolovanie a scrollTo */

/** Pracovali sme v konzoly v prehliadači: 
window.scrollTo(0, 300) // Potrebujem súradnice na osiach x a y, tento zápis ma posunie nižšie po osi y

window.scrollTo({ // Môžem zapísať aj objekt
    top: 300,
    left: 100,
    behavior: 'smooth'
}) */

const firstItemMenu = document.querySelector('.first-item-menu')
const scrollGoal = document.querySelector('.scroll-goal').offsetTop // Vypíše to pozíciu elementu po osi y, pozor - je to číselná hodnota

firstItemMenu.addEventListener('click', (e) => {
    console.log(scrollGoal)
    window.scrollTo({
        top: scrollGoal,
        behavior: 'smooth'
    })
})