// Pseudo Code: 

// Our website / app will be geared towards parents within Canada who want to know, CAN WE GO TO THE PARK RIGHT NOW.The app will take live data from Open Weather Map(openweathermap.org) and provide up to date info to help parents decide if its appropriate to take their kids out in the current weather conditions of their location.

// Create an event listener such that on form submit, the data form the user will update the fetchURL to get that specific City's object from the API

//Create a variable that stores the temperature form the main.temp property (const cityTemp)

// Create a variable that stores the weather description (i.e. Clody) (const cityWeatherCondition)

// manipulate the page such that the value from the stored variables will be displayed to the user byway of a template literal with ${variable}

// fetch('https://api.openweathermap.org/data/2.5/weather?q=ottwa&appid=4310fd1fc9ffb9abc888f8569b40e704')
//     .then(function (response) {
//         if (response.ok) {
//         return response.json();
//         } else {
//             throw new Error(response.statusText)
//         }
//     })
//     .then(function (jsonResult) {
//         console.log(jsonResult)
//         })
//     .catch((err) => {
//         if (err.message) {
//             console.log('we did it')
//         }
//     })





// 1. Create Namespace Object 

const myApp = {}




// -  Create init method on namespace object

myApp.init = () => {
    myApp.getWeather ()
}

// - Add API key as property to our namespace object

myApp.key = ('4310fd1fc9ffb9abc888f8569b40e704')
myApp.url = ('https://api.openweathermap.org/data/2.5/weather');

// GET DATA!
myApp.getWeather = () => {
    const url = new URL (myApp.url);
    url.search = new URLSearchParams ({
        q: "Toronto",
        appid:myApp.key,
    })
    fetch (url) 
        .then ((res) => {
            if (res.ok === true){
            return res.json ();
            } else {
                throw new Error (res.statusText)
            }
                
        })
        .then((jsonData) => {
            console.log(jsonData);
        })
        .catch((err) => {
            if (err.message === "Not Found") {
            alert("City Not Found");
            } else {
            alert("Something went wrong");
            }
        })
    

}

myApp.init();

// - Test API



// Create new URL object and url search params object!



// Display Images
    // Add some HTML based on data from api!


    // Get the parent element we want to add on to
    // Loop through Array and create a new div, and a new image element with our
    // art URLs
    // Append our new div to parent element



// -make sure we call the init method AT THE END