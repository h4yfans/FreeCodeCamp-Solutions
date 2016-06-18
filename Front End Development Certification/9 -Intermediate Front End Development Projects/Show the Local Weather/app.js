/*
 + Created by Kaan Karaca on 18/06/2016
 + github.com/h4yfans
 + feecodecamp.com/h4yfans
 + kaan94karaca@gmail.com
 */
$(document).ready(function () {
    $("#fade").fadeOut();

    var cityId;
    var cityName;
    var unitsFormat = "metric";

    var getWeatherInfo = function () {
        $.getJSON("http://api.sypexgeo.net/json")
            .done(function (locationData) {
                cityId = locationData.city.id;
                cityName = locationData.country.iso;

                $.getJSON("http://api.openweathermap.org/data/2.5/weather?", {
                    id: cityId,
                    units: unitsFormat,
                    APPID: '610ae7b6406da76bb34ad4bb95cc3673'
                })
                    .done(function (weatherDate) {
                        $("#w-icon").attr("src", "http://openweathermap.org/img/w/" + weatherDate.weather[0].icon + ".png");
                        $("#temp").text(Math.round(weatherDate.main.temp) + "°C");
                        $("#city").text(weatherDate.name + ",");
                        $("#country").text(cityName);
                        $("#description").text(weatherDate.weather[0].description);
                    });
            });
    }

    getWeatherInfo();
    $("#fade").fadeIn();
});