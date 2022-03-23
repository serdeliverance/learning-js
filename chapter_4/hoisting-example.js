greet()
greet()
greet()

/*
    This function is send to the top by javascript, before the rest of the code.
    So, the calls to it can be resolve correctly. This is called hoisting.

    - Hoisting works with function declarations.

    - Hoisting DOESN'T WORK with function expressions.
*/
function greet() {
    console.log('Hello!!!!!')
}