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
