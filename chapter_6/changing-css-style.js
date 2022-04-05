const title = document.querySelector('h1')

// it overrides the current style
// title.setAttribute('style', 'margin: 50px;')

console.log(title.style)

// this way add the property without completely override the style
title.style.margin = '50px'
title.style.fontSize = '60px'