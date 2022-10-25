// Weather data found on theweathernetwork.com
let weatherData = {
    Kingston : {
        "Monday" : {
        temp : 14,
        rainfall : "0",
        cloudiness : "Sunny"
        },
        "Tuesday" : {
        temp : 14,
        rainfall : "1",
        cloudiness : "Sunny"
        },
        "Wednesday" : {
        temp : 16,
        rainfall : "5",
        cloudiness : "Cloudy"
        },
        "Thursday" : {
        temp : 17,
        rainfall : "10-15",
        cloudiness : "Cloudy"
        },
        "Friday" : {
        temp : 14,
        rainfall : "1-3",
        cloudiness : "Cloudy"
        },
        "Saturday" : {
        temp :  13,
        rainfall : "1",
        cloudiness : "Cloudy"
        },
        "Sunday" : {
        temp : 13,
        rainfall : "0",
        cloudiness : "Sunny"
        }
    },
    Toronto : {
        "Monday" : {
            temp : 16,
            rainfall : "0",
            cloudiness : "Sunny"
        },
        "Tuesday" : {
            temp : 16,
            rainfall : "1",
            cloudiness : "Cloudy"
        },
        "Wednesday" : {
            temp : 18,
            rainfall : "1-3",
            cloudiness : "Cloudy"
        },
        "Thursday" : {
            temp : 16,
            rainfall :"0",
            cloudiness : "Cloudy"
        },
        "Friday" : {
            temp : 14,
            rainfall : "0",
            cloudiness : "Cloudy"
        },
        "Saturday" : {
            temp : 13,
            rainfall :  "0",
            cloudiness : "Cloudy"
        },
        "Sunday" : {
            temp : 13,
            rainfall : "0",
            cloudiness : "Cloudy"
        }
    },
    Frankford : {
        "Monday" : {
            temp : 15,
            rainfall : "0",
            cloudiness : "Sunny"
        },
        "Tuesday" : {
            temp : 15,
            rainfall : "1",
            cloudiness : "Sunny"
        },
        "Wednesday" : {
            temp : 17,
            rainfall : "1-3",
            cloudiness : "Cloudy"
        },
        "Thursday" : {
            temp : 18,
            rainfall : "1-3",
            cloudiness : "Sunny"
        },
        "Friday" : {
            temp : 15,
            rainfall : "0",
            cloudiness : "Cloudy"
        },
        "Saturday" : {
            temp : 13,
            rainfall : "0",
            cloudiness : "Cloudy"
        },
        "Sunday" : {
            temp : 13,
            rainfall : "0",
            cloudiness : "Cloudy"
        }
    }
};
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weatherArray = [weatherData.Kingston, weatherData.Frankford, weatherData.Toronto];
//Exporting all objects and arrays
module.exports = {
    weatherData :weatherData,
    weatherArray :weatherArray,
    daysOfWeek:daysOfWeek
};