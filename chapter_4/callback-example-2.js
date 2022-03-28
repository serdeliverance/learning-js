// get a rerefence to the 'ul'
const ul = document.querySelector('.people')

const people = ['ryu', 'ken', 'bison', 'akuma']

let html = ``

people.forEach(function(person) {
    // create html template
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)

ul.innerHTML = html