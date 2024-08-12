var getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("reject here");
        }, 3000);
        console.log("time out started");
    });
}


// ideal if you want to catch and end the function
// unlike Promise catch, it will still continue after the catch reject / error
var start = async () => {
    try {
        const result = await getData();
    } catch (error) {
        console.log(`error: ${error}`);
    } finally {
        console.log('finally');
    }
}

start();