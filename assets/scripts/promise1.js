const getWeather = () => {
    return new Promise((resolve, reject) => {
        // async process
        resolve('Sunny');
    });
}

const promiseWeather = getWeather();
promiseWeather.then(
    (data) => {
        console.log(`1st param: ${data}`);
    },
    (data) => {
        console.log(`2nd param: ${data}`);
    }
);
