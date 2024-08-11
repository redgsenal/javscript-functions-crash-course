// call stack
// function execution
const f1 = () => {
    console.log('executing f1');
}

const f2 = () => {
    console.log('executing f2');
    // f1 is added and called executed above f2 of the call stack
    f1();
}

const f3 = () => {
    console.log('executing f3');
    // f2 is added and called executed above f3 of the call stack
    f2();
}

// f3 goes in first into the call stack
f3();

// this concept is use in synchronous and asynchronous functions
