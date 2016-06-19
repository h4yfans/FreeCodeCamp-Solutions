$(document).ready(function () {

    // OpenWeatherMap only works over HTTP. Check if using HTTPS
    // and present an error with a link to a HTTP version of the page.
    getLocation();

});

function getLocation() {
    // Using the GEO IP API due to HTTP restrictions from OpenWeatherMap
    $.get('http://ip-api.com/json', function (loc) {
        $('#city').text(loc.city + ', ' + loc.region + ', ' + loc.country);
        getWeather(loc.lat, loc.lon, loc.countryCode);
    })
        .fail(function (err) {
            getWeather();
        });
}

function getWeather(lat, lon, countryCode) {
    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
        lat + '&lon=' + lon + '&units=imperial' + '&type=accurate' +
        '&APPID=9e1359ca27b87feea5cdc4cc4453b804'; // please use your own App ID

    $.get(weatherAPI, function (weatherData) {
        // Also used by convert();
        temp = weatherData.main.temp.toFixed(0);
        tempC = ((temp - 32) * (5 / 9)).toFixed(0);

        var condition = weatherData.weather[0].description,
            id = weatherData.weather[0].id,
            speed = Number((weatherData.wind.speed * 0.86897624190816).toFixed(1)),
            deg = weatherData.wind.deg,
            windDir,
            iconClass,
            bgIndex,
            backgroundId = [299, 499, 599, 699, 799, 800],
            backgroundIcon = [
                'thunderstorm',
                'sprinkle',
                'rain',
                'snow',
                'fog',
                'night-clear',
                'cloudy',
            ];
        backgroundId.push(id);
        bgIndex = backgroundId.sort().indexOf(id);
        $('body').css('background-image', 'url(' + backgroundImg[bgIndex] + ')');
        iconClass = backgroundIcon[bgIndex];

        //Get wind compass direction. If API returns null, assume 0 degrees.
        if (deg) {
            var val = Math.floor((deg / 22.5) + 0.5),
                arr = [
                    'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                    'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW',
                ],
                windDir = arr[(val % 16)];
        } else {
            windDir = 'N';
        }

        //determine F or C based on country and add temperature to the page.
        var fahrenheit = ['US', 'BS', 'BZ', 'KY', 'PL'];
        if (fahrenheit.indexOf(countryCode) > -1) {
            $('#temp').text(temp + '° F');
        } else {
            $('#temp').text(tempC + '° C');
        }

        //write final weather conditions and wind information to the page
        $('#wind-speed').html(
            '<i class="wi wi-wind wi-from-' + windDir.toLowerCase() + '"></i><br>' +
            windDir + ' ' + speed + ' knots');
        $('#weather').html(
            '<i class="wi wi-' + iconClass + '"></i><br>' + condition);
    })
        .fail(function (err) {
            alert('There was an error retrieving your weather data. \n' +
                'Please try again later. Redirecting you to Seattle for now.');
            $('#city').text('Seattle, WA, United States');
            getWeather(47.6062, 122.3321, 'US');
        });
}

//toggle between celsius / fahrenheit
$('#convert-button').click(function () {
    if ($('#temperature').text().indexOf('F') > -1) {
        $('#temperature').text(tempC + '° C');
    } else {
        $('#temperature').text(temp + '° F');
    }

    this.blur(); // remove focus from the button
});
