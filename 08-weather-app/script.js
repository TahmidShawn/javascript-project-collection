const getWeatherFunc = () => {
    const city = document.getElementById("weatherInput").value;

    const apiKey = "2109f4c54f1313f8afcf5e17686616a6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    console.log(apiUrl);

    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            const weatherInfo = document.getElementById("weatherInfo");
            console.log(data);
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherInfo.innerHTML = `
				<p>Description : ${description} </p>
				<p>Temperature : ${temp} &#176C</p>
				<p>Humidity : ${humidity} %</p>
				<p>Wind Speed : ${windSpeed} m/s</p>
			
			`;
        })
        .catch((error) => {
            console.log("oops", console.error(error));
        });
};
