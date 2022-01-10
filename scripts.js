// Pseudo Code: 

// Our website / app will be geared towards parents within Canada who want to know, CAN WE GO TO THE PARK RIGHT NOW.The app will take live data from Open Weather Map(openweathermap.org) and provide up to date info to help parents decide if its appropriate to take their kids out in the current weather conditions of their location.

// Create an event listener such that on form submit, the data form the user will update the fetchURL to get that specific City's object from the API

//Create a variable that stores the temperature form the main.temp property (const cityTemp)

// Create a variable that stores the weather description (i.e. Clody) (const cityWeatherCondition)

// manipulate the page such that the value from the stored variables will be displayed to the user byway of a template literal with ${variable}

// 1. Create Namespace Object 

const myApp = {}

// -  Create init method on namespace object

myApp.init = () => {
    myApp.userInput();
}

// - Add API key as property to our namespace object

myApp.url = ('https://api.openweathermap.org/data/2.5/weather');
myApp.key = ('4310fd1fc9ffb9abc888f8569b40e704');

myApp.userInput = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        myApp.userCity = form[0].value;
        console.log(myApp.userCity);
        myApp.getWeather(myApp.userCity);
        document.getElementById('searchBar').value = '';
    })
}

// GET DATA!
myApp.getWeather = (searchQuery) => {
    const url = new URL (myApp.url);
    url.search = new URLSearchParams ({
        q: searchQuery,
        units: 'metric',
        appid:myApp.key,
    })
    fetch(url) 
        .then((res) => {
            if (res.ok === true){
            return res.json();
            } else {
                throw new Error(res.statusText)
            }                
        }) 
        .then((jsonData) => {
            myApp.displayWeather(jsonData);
        })
        .catch((err) => {
            if (err.message === "Not Found") {
                document.querySelector('.spellingModal').style.display = 'block';
                myApp.closeModal();
            } else {
            document.querySelector('.miscModal').style.display = 'block;';
            myApp.closeModal();
            };
        })
    

}

myApp.weatherContainer = document.querySelector('.weatherDescription');

    myApp.displayWeather = (weatherResults) => {
        const displayData = document.createElement('p');
        myApp.weatherContainer.innerHTML = "";
        displayData.textContent = (`The temperature in ${myApp.userCity} is currently ${weatherResults.main.temp}º, BUT, it feels like ${weatherResults.main.feels_like}º. The situation out there is ${weatherResults.weather[0].description}.`)
        myApp.weatherContainer.append (displayData);
    }

    myApp.closeModal = () => {
        document.querySelector(".popUp").addEventListener("click", () => {
            document.querySelector('.spellingModal').style.display = 'none';
            document.querySelector('.miscModal').style.display = 'none';
        })

    }

myApp.init();



// Display Images
    // Add some HTML based on data from api!


    // Get the parent element we want to add on to
    // Loop through Array and create a new div, and a new image element with our
    // art URLs
    // Append our new div to parent element



// -make sure we call the init method AT THE END