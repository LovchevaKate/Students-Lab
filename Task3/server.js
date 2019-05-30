import express from "express";
import getWeather from "./index";

const appid = "c93e39a59f829c5617a61b1c8819e574";
const app = express();

app.use("/", express.static("public"));

app.get("/api/weather", (req, res) => {
  let city = req.query.city;
  let weather = {};
  let tempK;

  getWeather(city, appid)
    .then(res => {
      tempK = res.main.temp;
      weather.main = res.weather;
      weather.pressure = res.main.pressure;
    })
    .then(() => {
      weather.temp = fromKtoC(tempK);
    });
});

function fromKtoC(k) {
  let res = k - 273.15;
  return res;
}

app.listen(4000, () => console.log("server started on http://localhost:4000"));
