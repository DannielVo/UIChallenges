var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var tempValue = document.querySelector(".temperature-value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var humidity = document.querySelector(".humidity span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

async function changeWeatherUI() {
  let locationSearch = search.value.trim();

  let apiKey = "4957974c11cd8ffbd1e9f65ed9a7ba22";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=${apiKey}&units=metric`;

  let data = await fetch(apiURL).then((res) => res.json());
  console.log(data);

  // Lấy data
  if (data.cod === 200) {
    content.classList.remove("hidden");

    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    humidity.innerText = data.main.humidity + "%";
    tempValue.innerText = Math.round(data.main.temp);
    shortDesc.innerText = data.weather[0]?.main || "";
    time.innerText = new Date().toLocaleString("vi");

    // Phân loại nhiệt độ và thời tiết
    const temp = Math.round(data.main.temp);
    const weatherMain = data.weather[0]?.main.toLowerCase();

    if (weatherMain.includes("rain")) {
      body.setAttribute("class", "rain");
    } else if (temp >= 27) {
      body.setAttribute("class", "hot");
    } else if (temp >= 23) {
      body.setAttribute("class", "warm");
    } else if (temp >= 19) {
      body.setAttribute("class", "cool");
    } else {
      body.setAttribute("class", "cold");
    }
  } else {
    content.classList.add("hidden");
  }
}

// Gọi khi nhấn Enter trong ô input
search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    changeWeatherUI();
  }
});
