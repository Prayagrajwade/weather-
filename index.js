let weather = {
    apiKey:"c0bad55d6ea4b148ca54752e1d0933d3",
    fetchWeather: function (city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },


    displayWeather: function(data){
        const{name} = data;
        const {icon,discription} = data.weather;
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,icon,discription,temp,humidity,speed)
    }
};