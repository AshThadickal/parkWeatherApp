
const myApp = {}

myApp.weatherImgs = {
    snow: {
        src: 'Assets/aaron-burden-5AiWn2U10cw-unsplash.jpg', 
        alt: 'Close up of a snow flake.'
    },
    sunny: {
        src:'Assets/wallpaperflare.com_wallpaper.jpg',
        alt: 'A clear and sunny sky.'
    },
    rain:{
        src: 'Assets/reza-shayestehpour-Nw_D8v79PM4-unsplash.jpg', 
        alt: 'An image of a rainy day.'
    },
    clouds: {
        src: 'Assets/pexels-josh-sorenson-1478524.jpg',
        alt: 'A cluster of white fluffy clouds.'
    },
    default: {
        src: 'Assets/pexels-jason-kim-5785548.jpg',
        alt: 'A photo of a park with swing in the background.'
    }
}

myApp.init = () => {
    // myApp.pageLoad();
    myApp.userInput();
}

// myApp.pageLoad = () => {
//     window.addEventListener('load', (event) => {
//         myApp.loading();
//     });
// }

myApp.url = ('https://api.openweathermap.org/data/2.5/weather');
myApp.key = ('4310fd1fc9ffb9abc888f8569b40e704');

// Getting and Storing User Data
myApp.userInput = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        myApp.userCity = form[0].value;
        myApp.getWeather(myApp.userCity);
        document.getElementById('searchBar').value = '';
    })
}

// loading image to wait for API and image load
const loader = document.querySelector('.loading');
myApp.loading = () => {
    loader.classList.add('display');
    setTimeout(() => {
        loader.classList.remove('display');
    }, 2000);
}

// to hide loading
myApp.hideLoading = () => {
    loader.classList.remove('display')
}

// Get Data from API
myApp.getWeather = (searchQuery) => {
    myApp.loading()
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
            myApp.displayWeatherImg(jsonData); 
            myApp.hideLoading()
        })
        .catch((err) => {
            if (err.message === 'Not Found') {
                document.querySelector('.spellingModal').style.display = 'block';
                myApp.closeModal();
            } else {
                document.querySelector('.miscModal').style.display = 'block;';
                myApp.closeModal();
            };
        })
}

// Method to Display Weather Results
myApp.displayWeather = (weatherResults) => {
    const weatherContainer = document.querySelector('.weatherDescription');
    const displayData = document.createElement('p');
    weatherContainer.innerHTML = '';
    displayData.textContent = (`The temperature in ${myApp.userCity} is currently ${weatherResults.main.temp}ºC. It feels like ${weatherResults.main.feels_like}ºC. The current weather condition is ${weatherResults.weather[0].description}.`)
    weatherContainer.append (displayData);
}

// Method to Close Error Message
myApp.closeModal = () => {
    document.querySelector('.popUp').addEventListener('click', () => {
        document.querySelector('.spellingModal').style.display = 'none';
        document.querySelector('.miscModal').style.display = 'none';
    })

}

// Method to Display Images that Match Weather Conditions
myApp.displayWeatherImg = (weatherResults) => {
    const imgElement = document.querySelector('.parkImage img');
    if (weatherResults.weather[0].main === 'Snow') {
        imgElement.src = myApp.weatherImgs.snow.src; 
        imgElement.alt= myApp.weatherImgs.snow.alt;
    } else if (weatherResults.weather[0].main === 'Clear') {
        imgElement.src = myApp.weatherImgs.sunny.src; 
        imgElement.alt= myApp.weatherImgs.sunny.alt;
    } else if (weatherResults.weather[0].main === 'Rain') {
        imgElement.src = myApp.weatherImgs.rain.src; 
        imgElement.alt= myApp.weatherImgs.rain.alt;
    } else if (weatherResults.weather[0].main === 'Clouds') {
        imgElement.src = myApp.weatherImgs.clouds.src; 
        imgElement.alt= myApp.weatherImgs.clouds.alt;
    } else {
        imgElement.src = myApp.weatherImgs.default.src; 
        imgElement.alt= myApp.weatherImgs.default.alt;
    }
    };

myApp.init();
