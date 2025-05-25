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

