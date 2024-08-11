// HOF - higher order function
// a. takes 1 or more function argument
// b. optionally returns a function

// examples
// function calling the parameter function with no returns
const functionA = (functionB) => {
    functionB();
}

// just a regular function
const B = () => {
    console.log('this is B');
}

functionA(B);

// function A with a parameter as a function
functionA(() => {
    console.log('from anonymouse function');
});

// function to return a function
const functionC = () => {
    return () => {
        console.log('a returning function called function C');
    }
}

// get the returned function
const functionD = functionC();
// call the returned function
functionD();

// example of uses
const w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(a => {
    if (a % 2 == 0) {
        return a;
    }
});

// returns values divisible by 2
console.log(w);
