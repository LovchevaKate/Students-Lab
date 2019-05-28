import express from "express";
import path from "path";
import getWeather from "./index";

const appid = "c93e39a59f829c5617a61b1c8819e574";
const app = express();

app.use("/", express.static("public"));

app.get("/api/weather", (req, res) => {
  let city = req.query.city;
  console.log(city);

  getWeather(city, appid);
});

app.listen(4000, () => console.log("server started on http://localhost:4000"));
