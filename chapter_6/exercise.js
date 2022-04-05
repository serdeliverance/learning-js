const paras = document.querySelectorAll('p')

paras.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error')    // add the class error to any element that contains the text error
    }
    if (p.textContent.includes('success')) {
        p.classList.add('success')
    }
})