const weatherRecv = (data) => {
    let weather = data;
    console.log(`show web page weather ${weather}`);
}

const getWeather = (callback) => {
    setTimeout(
        callback
        , 5000);
    console.log('wait for get weather to finish...');
}

const displayIcon = (data) => {
    switch (data) {
        case 'Sunny':
            return '☀️';
        case 'Rainy':
            return '🌧️';
        case 'Cloudy':
            return '☁️';
        default:
            return '⛈️';
    }
}

const showWeatherIcon = (data) => {
    const icon = displayIcon('Rainy');
    console.log(`Today's weather icon: ${icon}`);
}

getWeather(() => {
    weatherRecv('Sunny');
    showWeatherIcon('Sunny');
});