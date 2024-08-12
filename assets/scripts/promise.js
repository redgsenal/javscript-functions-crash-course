// real world example
const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[0].shortForecast));
    });
};

const displayData = (weather) => {
    console.log(weather);
}

const onError = (error) => {
    console.log(`error ${error}`)
}

fetchData()
    .then(displayData)
    .catch(onError)
    .finally(() => {
        console.log('clean up here on finally');
    });