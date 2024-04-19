let citySearch = document.getElementById("inputValue");
let search = document.getElementById("check");
let temp = document.getElementById("temp");
let cityInfo = document.getElementById("cityInfo");
let images = document.querySelector(".images");

let humText = document.querySelector(".HumidityText");
let windText = document.querySelector(".windText");

search.addEventListener("click", () => {
  WeatherApp(citySearch.value);
});

citySearch.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    WeatherApp(citySearch.value);
  }
});

async function WeatherApp(e) {
  let ApiKey = "501f125e82d177cd9010b8c381b5449d";
  let city = e;
  let Api = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric&lang={pl}`
  );
  let data = await Api.json();

  temp.innerHTML = `${data.main.temp}°c`;
  cityInfo.innerHTML = data.name;
  humText.innerHTML = `${data.main.humidity}%`;
  windText.innerHTML = `${data.wind.speed}m/s`;

  if (data.weather[0].main == "Clouds") {
    images.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    images.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    images.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    images.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    images.src = "images/rain.png";
  } else {
    images.src = "images/snow.png;";
  }
}
