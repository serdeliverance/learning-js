// example of function parameters with default values

const speak = function(name = 'john', time = 'morning') {
    console.log(`good ${time}, ${name}`)
}

speak('sergio', 'morning')
speak()

// function that returns a value

const calcArea = function(radius) {
    return 3.14 * radius**2
}

const area = calcArea(4)
console.log(`area = ${area}`)

// arrow functions

const calcSquareArea = side => side**2

const calcAreaV2 = radius => 3.14 * radius** 2