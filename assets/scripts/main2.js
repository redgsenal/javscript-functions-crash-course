// nested functions; outer and inner functions
let j = 'hello';
const k = 1000;
var l = 89.19;

outer = () => {
    console.log('from outer 111');
    inner = (p) => {
        let q = 'happy';
        const r = 1975;
        var s = 4.30;
        console.log('from inner parameter p: ' + p);
        console.log("from outer variables: ", j, k, l);
        console.log("from inner variables: ", q, r, s);
    }
    inner('Joe!');
    console.log(j, k, l);
    console.log("from inner outer variables: ", q, r, s);
}

outer();