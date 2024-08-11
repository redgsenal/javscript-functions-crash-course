const thing1 = (callback) => {
    console.log('thing 1 called');
    console.log('execute callback from thing1...');
    callback();
};

const thing2 = (callback) => {
    console.log('thing 2 called');
    console.log('execute callback from thing2...');
    callback();
};

const thing3 = (callback) => {
    console.log('thing 3 called');
    console.log('execute callback from thing3...');
    callback();
};

// this is undesirable; consider promises and async / await
thing1(() => {
    thing2(() => {
        thing3(() => { console.log('ends here...'); })
    });
});