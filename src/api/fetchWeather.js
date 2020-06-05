const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "20f1a5ade69927d749a2af7bfe34ccba";

const getQurl = (query) => `${URL}?q=${query}&units=imperial&appid=${API_KEY}`;

export const fetchWeather = async (query) => {
  const response = await fetch(getQurl(query));
  const data = response.json();
  return data;
};
