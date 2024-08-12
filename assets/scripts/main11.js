getData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("resolve here");
        }, 3000);
        console.log("time out started");
    });
}

start = async () => {
    console.log("inside async");
    const result = await getData();
    console.log(result);
}

start();
console.log("called start");