//In your project, display the current date and time using JavaScript: Tuesday 16:00
//I need my appllication to have live dates and times every time the page uploads. NEED TO CREATE FUNCTIONS WITH SOME COMMANDS

let day = document.querySelector("#currentDay");
console.log(day);

let time = document.querySelector("#currentTime");
console.log(time);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.toLocaleTimeString());

function liveDay() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[now.getDay()];
  console.log(`Today is ${currentDay}`);
  let day = document.querySelector("#currentDay");
  day.innerHTML = currentDay;
  let hours = now.getHours();
  if (hours < 10) {
    //this is Matts input. JS time and dates use 2 instead of '02' this helps change that!

    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let time = document.querySelector("#currentTime");
  time.innerHTML = `${hours}:${minutes}`;
}

liveDay();

//🕵️‍♀️Feature #2 Add a search engine, when searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.
//JS FUNCTIONS AND EVENTS!

let form = document.querySelector("#searchCity");
console.log(form);

function searchCtiy(event) {
  //function a list of commands.
  event.preventDefault();
  let cityInput = document.querySelector("#exampleInputText1"); //create a variable for search bar. select search bar
  console.log(`${cityInput.value}`); //show the VALUE of the searched value in the console just to see if it works
  let currentCity = document.querySelector("#city"); //create a variable h1 as this is where i want the city to show when its been searched
  currentCity.innerHTML = cityInput.value; //change the html of the orginal text to the searched city

  //MAKE AN API CALL TO OPEN WEATHER API
  //ONCE I GET THE HTTP RESPONSE, WE DISPLAY THE CITY NAME AND TEMPERATURE

  let apiKey = "a70647c59db0a327ac410ec5a7f76115";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(url).then(showWeather);
}

form.addEventListener("submit", searchCtiy); //a JS event - creates an action once a user clicks on the submit(search button)

//API PROJECT!
//On your project, when a user searches for a city (example: New York),
//it should display the name of the city on the result page and the current temperature of the city.

function showWeather(response) {
  console.log(response);
  console.log(Math.round(response.data.main.temp));
  let currentTemp = Math.round(response.data.main.temp);
  let liveTemp = document.querySelector("#temperature");
  liveTemp.innerHTML = currentTemp;
  console.log(response.data.main.humidity);
  let humidity = response.data.main.humidity;
  let humid = document.querySelector("#humid");
  humid.innerHTML = humidity;
  console.log(response.data.wind.speed);
  let wind = Math.round(response.data.wind.speed);
  let windSpeed = document.querySelector("#windy");
  windSpeed.innerHTML = wind;
  let main = document.querySelector("#description");
  let tempDescrip = response.data.weather[0].main;
  console.log(response.data.weather[0].main);
  main.innerHTML = tempDescrip;
}

//Add a Current Location button. When clicking on it, it uses the Geolocation
//API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.

function currentTemp() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let current = document.querySelector("#currentButton");
current.addEventListener("click", currentTemp);

function showPosition(position) {
  //console.log(position);
  console.log(position.coords.latitude);
  let lat = position.coords.latitude;
  console.log(position.coords.longitude);
  let long = position.coords.longitude;
  let apiKey = "a70647c59db0a327ac410ec5a7f76115";
  let geoUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  console.log(geoUrl);
  axios.get(geoUrl).then(showCurrentlocation);
}

function showCurrentlocation(response) {
  console.log(response);
  console.log(response.data.name);
  let currentLoc = document.querySelector("#city");
  let current = response.data.name;
  currentLoc.innerHTML = current;
  console.log(response.data.main.temp);
  let currentLoctemp = Math.round(response.data.main.temp);
  let locTemp = document.querySelector("#temperature");
  locTemp.innerHTML = currentLoctemp;
  console.log(response.data.main.humidity);
  let humidOne = response.data.main.humidity;
  let humidPercent = document.querySelector("#humid");
  humidPercent.innerHTML = humidOne;
  console.log(response.data.wind.speed);
  let windSpeedtwo = document.querySelector("#windy");
  let windTwo = Math.round(response.data.wind.speed);
  windSpeedtwo.innerHTML = windTwo;
}

//🙀Bonus Feature Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
//When clicking on it, it should convert the temperature to Fahrenheit.
//When clicking on Celsius, it should convert it back to Celsius.
//2 clicks means 2 events/ functions

//function liveTemperature() {
//let temp = document.querySelector("#temperature");
//temp.innerHTML = 66;}

//let temp = document.querySelector("#fahrenheit");
//emp.addEventListener("click", liveTemperature);

//function liveCel() {
//let tempCel = document.querySelector("#temperature");
//tempCel.innerHTML = 17;
//}

//let tempTwo = document.querySelector("#celsius");
//tempTwo.addEventListener("click", liveCel);
