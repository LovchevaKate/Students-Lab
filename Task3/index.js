import axios from "axios";

const getWeather = async (city, appid) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    );

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default getWeather;
