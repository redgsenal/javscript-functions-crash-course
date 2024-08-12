// much cleaner simple than Promise approach
// async and await goes together
// recommended to use Chrome Dev Tools console when using async and await
start = async () => {
    console.log("inside async");
    const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
    const result = await data.json();
    console.log(result.properties.periods[0].shortForecast);
}

start(); 