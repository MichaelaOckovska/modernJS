/** Ikona "Nahor" */
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