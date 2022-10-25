//Tori Thompson - Assignment 1
//Requiring express and weather.js file
const express = require('express');
const { weekDay, weatherData, daysOfWeek } = require('./weather');
const weather = require('./weather');
const app = express();
//Setting ejs as view engine used
app.set('view engine', 'ejs');
//Routing static pages through public folder
app.use(express.static("public"));
//Setting port 3000 for use
app.listen(3000);

//Get all weather for all locations for the week and 
//optionally the average for this data
app.get("/weather/all/:average?", (request, response) => {
    let cities = Object.keys(weather.weatherData);
    let average = request.params.average;
    let weatherInfo = [];
    let avgTemp = 0; 
    for(let i = 0; i < cities.length; i++)
    {
        let currentCity = cities[i];
        let cityInfo = weather.weatherData[currentCity];
        weatherInfo.push(cityInfo);
    }
    response.render('allWeather' , {
        cities : cities,
        weatherInfo : weatherInfo,
        weekDays : weather.daysOfWeek,
        average : average,
        avgTemp : avgTemp
    })

});
// Get all weather data for a specific city for the week
// and optionally what days are sunny for that city
app.get("/weather/details/:city/:sunny?", (request, response) => {
    let city = request.params.city;
    let sunny = request.params.sunny;
    let cityWeather = weather.weatherData[city];

    response.render('weather', {
        cityWeather : cityWeather,
        city:city,
        weekDay : weather.daysOfWeek,
        sunny : sunny
    })

});
//Get weather data for a specific city and specific day
app.get("/weather/:city/:day", (request, response) => {
    let day = request.params.day;
    let city = request.params.city;
    let weekWeather = weather.weatherData[city];
    let index = 0;
    if(weather.daysOfWeek.indexOf(day) === -1)
    {
        day = null;
    }
    if(day !== null)
    {
        for(let i = 0; i < weather.daysOfWeek.length; i++)
        {
            if(weather.daysOfWeek[i] === day) {
                index = i;     
            }
        }
        response.render('cityWeather', {  
            cityWeather : weekWeather[weather.daysOfWeek[index]],
            city : city,
            weekDay: weather.daysOfWeek, 
            index : index
        });
    }
    else 
    {
        response.render('notfound');
    }
});
//Get weather data for the warmest day in a specific city
app.get("/warmest/:city", (request, response) => {
    let city = request.params.city;
    let cityTemps = weather.weatherData[city];
    let warmestTemp = 0;
    let warmestDay = "";
    let daysOfWeek = weather.daysOfWeek;
    if(cityTemps !== null)
    {
        for(let index = 0; index < daysOfWeek.length; index++)
        {
            if(cityTemps[daysOfWeek[index]]["temp"] > warmestTemp)
            {
                warmestTemp = cityTemps[daysOfWeek[index]]["temp"];
                warmestDay = daysOfWeek[index];       
            }
        }
        response.render('advanced', {
            warmestTemp : warmestTemp,
            warmestDay : warmestDay,
            warmestCity : city,
            day:null
        });
    } else {
        response.render('notfound');
    }
});
//Get weather data for the warmest city on a specific day
app.get("/location/:day", (request, response) => {
    let day = request.params.day;
    let warmestTemp = 0;
    let warmestCity = "";
    let cities = Object.keys(weather.weatherData);
    let weatherArray = weather.weatherArray;
    if(weather.daysOfWeek.indexOf(day) === -1)
    {
        day = null;
    }
    if(day !== null)
    {
        for(let i = 0; i < weatherArray.length; i++)
        {
            if(weatherArray[i][day].temp > warmestTemp)
            {
                warmestTemp = weatherArray[i][day].temp;
                warmestCity = cities[i];
            }
        }
        response.render('advanced', {
            warmestTemp : warmestTemp,
            warmestCity : warmestCity,
            day : day
        });
    } else {
    response.render('notfound');
    }
});