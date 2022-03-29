// assigning a reference to a primitive number, creates a new copy on the stack
let num1 = 1
let num2 = num1

// reference types are store in the heap, and are poited from memory through pointers
let userOne = { name: 'ryu', score: 200 }
let userTwo = userOne   // userTwo now is pointing to the same reference as userOne
userOne.score = 100

console.log(userOne)
console.log(userTwo)    // so, both logs the same