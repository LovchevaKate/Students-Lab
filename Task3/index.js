const appid = "c93e39a59f829c5617a61b1c8819e574";
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const description = document.getElementById("description");
const time = document.getElementById("time");

let city = document.getElementById("city").value;

function getWeather(city) {
  let w = [];
  let t = new Date();
  time = t.toLocaleString();
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`,
    type: "GET",
    success: function(weather) {
      res = fromKtoC(weather.main.temp);
      temp.innerHTML = res;
      pressure.innerHTML = weather.main.pressure;
      w = weather.weather.pop();
      description.innerHTML = w.description;
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert(xhr.status);
      alert(thrownError);
    }
  });
}

$("#search").click(function(e) {
  e.preventDefault();
  getWeather(city);
});

$("#refresh").click(function(e) {
  e.preventDefault();
  getWeather(city);
});

setTimeout(getWeather(city), 1000);

function fromKtoC(k) {
  let res = Math.round(Number(k) - 273.15);
  return res.toString();
}
