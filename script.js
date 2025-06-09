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

window.scrollTo(0, 300) // Potrebujem súradnice na osiach x a y, tento zápis ma posunie nižšie po osy y

window.scrollTo({ // Môžem zapísať aj objekt
    top: 300,
    left: 100,
    behavior: 'smooth'
}) 

