// recursions
const foo = (i = 0) => {
    console.log('inside foo: ' + i);
    // stop recursion when
    if (i >= 10) {
        return;
    }
    // same function is called again but with different parameter
    foo(i + 1);
}

foo();