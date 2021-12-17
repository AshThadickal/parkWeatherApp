// Pseudo Code: 

// Our website / app will be geared towards parents within Canada who want to know, CAN WE GO TO THE PARK RIGHT NOW.The app will take live data from Open Weather Map(openweathermap.org) and provide up to date info to help parents decide if its appropriate to take their kids out in the current weather conditions of their location.

// Create an event listener such that on form submit, the data form the user will update the fetchURL to get that specific City's object from the API

//Create a variable that stores the temperature form the main.temp property (const cityTemp)

// Create a variable that stores the weather description (i.e. Clody) (const cityWeatherCondition)

// manipulate the page such that the value from the stored variables will be displayed to the user byway of a template literal with ${variable}

fetch('https://api.openweathermap.org/data/2.5/weather?q=florida&appid=4310fd1fc9ffb9abc888f8569b40e704')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonResult) {
        console.log(jsonResult)
    })
