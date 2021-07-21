let weather = {
    apiKey:"c0bad55d6ea4b148ca54752e1d0933d3",
    fetchWeather: function (city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json()).then((data) => console.log(data));
    },


    displayWeather: function(data){
        const{name} = data;
    }
};