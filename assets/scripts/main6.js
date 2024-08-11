// pure function
const greet = (name) => {
    return `Hello there ${name}!`;
}
const f = greet('John');
console.log(f);

// produce a side effects to the greet2 function
// the function is not pure anymore
let greeting = 'Cómo estás';
const greet2 = (name) => {
    return `${greeting} ${name}!`;
}

console.log(greet2('John'));