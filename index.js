let weather = {
    apiKey:"c0bad55d6ea4b148ca54752e1d0933d3",
    fetchWeather: function (city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },


    displayWeather: function(data){
        const{name} = data;
        const {icon,discription} = data.weather[0];
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        console.log(name,icon,discription,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon +"@x.png";

        document.querySelector(".discription").innerText = discription;


        document.querySelector(".temp").innerText = temp+ " C";

        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";

        document.querySelector(".wind").innerText = "wind speed:" + speed + "km/h";

        document.querySelector(".weather").classlist.remove("loading");
    },

    search:function()
    {
           this.fetchWeather( document.querySelector(".search-bar").value);
    },
};



document.querySelector(".search button").addEventListener("click",function(){

    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
   if(event.key == "Enter")
   {
       weather.search();
   }
});


weather.fetchWeather("Shahdol");