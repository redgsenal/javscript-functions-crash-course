// understanding closure concept
outer = (a) => {
    inner = (b) => {
        return a + b;
    }
    return inner;
}

result = outer(10);
result2 = result(5)
console.log(result);
console.log(result2);