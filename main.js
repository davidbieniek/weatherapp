let value = document.getElementById("cityValue");
let button = document.getElementById("but");
let temp = document.querySelector(".temp");

button.addEventListener("click", () => {
  let city = value.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&appid=501f125e82d177cd9010b8c381b5449d&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.name !== undefined) {
        console.log(res);
        temp.innerHTML = `${res.main.temp} °C`;
      } else {
        temp.innerHTML = "Błąd: Nie znaleziono miasta";
      }
    })
    .catch((error) => console.log("Błąd: ", error));
});
