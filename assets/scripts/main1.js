function x(...params) {
    console.log("from x ")
    console.log(params);
    return 1;
}

function y() {
    console.log("from y");
    console.log(a);
}

// arrow function
const add1 = (w, z) => {
    return w + z;
}

// arrow function
const add2 = (w, z) => w + z;

let a = x(200, ['a', 2, [4, 1, 5]]);
y();

console.log(add1(100, 100));
console.log(add2(6, 4));