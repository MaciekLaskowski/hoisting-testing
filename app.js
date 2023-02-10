var a = 5;

console.log(a);

// in this excample we get 5 in console log - as expected
// what really happens while hoisting is:
// let a;
// a = 5;
// console.log(a);
// so yes, we get 5

console.log(b);

var b = 3;

console.log(b);

// what happens here, is we get undefined as value of console log
// this is because due to hoisting declaration of let b is move to the top of the code
// then console log and initialization remains in the same place
// so console log happens before value 3 is assigned to the variable
// let b;
// console.log(b) ---> undefined
// b = 3;

sumTwo(5, 7);

function sumTwo(a, b) {
    console.log(a + b);
}

// functions are also hoisted
// the are even moved above the var declartions, so to very top of the code
// so in this example we receive 12 as a result even tho function has been declared after we really run it
// but what happens thanks to hoisting, is moving function declaration to very to
// so code from line 26 can be executed properly
// what is important arrow functions, or the ones defined with let or const keywrods would not be hoisted
