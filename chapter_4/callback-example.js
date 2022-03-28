// callbacks & foreach

const myFunc = (callback) => {
    // do something
    let value = 50
    callback(value)
}

myFunc((value) => console.log(`[inside callback] ${value}`))

// foreach example
let people = ['mario', 'sergio', 'pepo']

people.forEach((v) => console.log(v))

people.forEach((person, index) => {
    console.log(`element: ${person}, index: ${index}`)
})

const logPerson = (person, index) => {
    console.log(`${index}, ${person}`)
}

people.forEach(logPerson)