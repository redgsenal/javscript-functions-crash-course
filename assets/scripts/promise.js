const getWeather = () => {
    return new Promise((resolve, reject) => {
        // async process
        //reject('Sunny');
        setTimeout(() => {
            resolve('Rainy')
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

// promise chaining 😍😍
getWeather()
    .then(getWeatherIcon)
    .then(onSuccess, onReject);