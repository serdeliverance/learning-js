const para = document.querySelector('p')

// console.log(para.innerText)
para.innerText = 'ninjas are awesome!'

// const paras = document.querySelectorAll('p')
// paras.forEach(para => {
//     console.log(para)
//     para.innerText += ' Cool, man!!!'
// })

const content = document.querySelector('.content')
content.innerHTML += '<h2>this is a new h2</h2>'

const people = ['mario', 'luigi', 'yoshi']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})