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
  let currentTime = now.toLocaleTimeString();
  let time = document.querySelector("#currentTime");
  time.innerHTML = currentTime;
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
  let cityInput = document.querySelector("#exampleInputText1"); //create a variable for search bar
  console.log(`${cityInput.value}`); //show the VALUE of the searched value in the console just to see if it works
  let currentCity = document.querySelector("#city"); //create a variable h1 as this is where i want the city to show when its been searched
  currentCity.innerHTML = cityInput.value; //change the html of the orginal text to the searched city
}

form.addEventListener("submit", searchCtiy); //a JS event - creates an action once a user clicks on the submit(search button)

//🙀Bonus Feature Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
//When clicking on it, it should convert the temperature to Fahrenheit.
//When clicking on Celsius, it should convert it back to Celsius.
//2 clicks means 2 events/ functions

function liveTemperature() {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = 66;
}

let temp = document.querySelector("#fahrenheit");
temp.addEventListener("click", liveTemperature);

function liveCel() {
  let tempCel = document.querySelector("#temperature");
  tempCel.innerHTML = 17;
}

let tempTwo = document.querySelector("#celsius");
tempTwo.addEventListener("click", liveCel);
