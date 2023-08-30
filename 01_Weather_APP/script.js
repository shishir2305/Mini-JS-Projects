const apiKey = "put your api key";
const submitButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

  let weatherType = data.weather[0].main;
  if (weatherType == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherType == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weatherType == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weatherType == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherType == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (weatherType == "Snow") {
    weatherIcon.src = "images/snow.png";
  }
  document.querySelector(".weather").style.display = "block";
}

submitButton.addEventListener("click", async () => {
  const cityName = document.querySelector(".search input").value;
  fetchData(cityName);
});
