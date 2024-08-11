// callbacks
const foo = (bar) => {
    // bar should be a function and is called back to the parent function
    bar();
};

const functionA = () => {
    console.log('this is function A');
}

foo(() => {
    // this is an anonymous (unnamed) function
    console.log('hello there!!!');
});

foo(functionA);