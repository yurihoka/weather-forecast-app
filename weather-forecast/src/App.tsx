import { useEffect, useState } from "react";
import weatherDataDoc from "./weatherData.json";

// const fetchWeatherApi = () => {
//   // const results = await fetch(
//   //   "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&&units=metric&appid=c54decd8137c19d79f34bcb2b31922a3"
//   // );

//   // if (!results.ok) {
//   //   throw new Error(`HTTP error! status: ${results.status}`);
//   // }

//   // const data = await results.json();
//   // console.log("weatherData: ", data);

//   return data;
// };

export default function App() {
  // const weatherDataDoc = fetchWeatherApi();

  const [weatherData, setWeatherData] = useState<{
    city: string;
    country: string;
    temperature: number;
    weather: string;
    day: string;
  }>({
    city: "",
    country: "",
    temperature: 0,
    weather: "",
    day: "",
  });
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setWeatherData({
      city: weatherDataDoc.city.name,
      country: weatherDataDoc.city.country,
      temperature: weatherDataDoc.list[0].main.temp,
      weather: weatherDataDoc.list[0].weather[0].main,
      day: dayNames[new Date(weatherDataDoc.list[0].dt_txt).getDay()],
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">{weatherData.city}</h1>
      <h1 className="text-3xl font-bold">{weatherData.country}</h1>
      <h1 className="text-3xl font-bold">{weatherData.temperature}°</h1>
      <h1 className="text-3xl font-bold">{weatherData.weather}</h1>
      <h1 className="text-3xl font-bold">{weatherData.day}</h1>
    </>
  );
}
