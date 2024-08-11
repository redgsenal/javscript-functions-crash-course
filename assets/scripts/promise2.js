const getWeather = () => {
    return new Promise((resolve, reject) => {
        // async process
        //reject('Sunny');
        setTimeout(() => {
            reject('Rainy')
        }, 1000);
    });
}

const getWeatherIcon = (weather) => {
    return new Promise((resolve, reject) => {
        // async process
        //reject('Sunny');
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('☀️');
                case 'Rainy':
                    resolve('🌧️');
                case 'Cloudy':
                    resolve('☁️');
                default:
                    reject('no icons found');
            }
        }, 1000);
    });
}

const onSuccess = (data) => {
    console.log(`Success here data: ${data}`);
}

const onReject = (error) => {
    console.log(`Reject here error: ${error}`);
}

const onError = (error) => {
    console.error("something is wrong: ", error);
}

// promise chaining 😍😍
getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError);