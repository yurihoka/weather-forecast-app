import { useEffect, useState } from "react";

type WeatherDataProps = {
  weather: { id: number; main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
};

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps[]>([]);
  const [cityName, setCityName] = useState("Okinawa");
  const firstWeatherData = weatherData[0];
  const getCityName = () => {
    const inputElement = document.getElementById(
      "cityName"
    ) as HTMLInputElement;
    if (inputElement) {
      const newCityName = inputElement.value.trim();
      if (newCityName) {
        setCityName(newCityName);
      }
    }
  };

  useEffect(() => {
    async function fetchWeatherApi() {
      if (!cityName) return;

      const apiUrl = `${
        import.meta.env.VITE_APP_OW_API_URL
      }/weather/?q=${cityName}&APPID=${
        import.meta.env.VITE_APP_OW_API_KEY
      }&units=metric`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        setWeatherData([data]);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeatherApi();
  }, [cityName]);

  return (
    <div className="p-4">
      {firstWeatherData ? (
        <div className="text-gray-700">
          <div className="flex border-2 border-gray-500">
            <input
              type="text"
              placeholder="Search Place.."
              className="w-full outline-none text-sm px-4 py-3"
              id="cityName"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-gray-500 px-5 text-sm"
              onClick={getCityName}
            >
              Search
            </button>
          </div>

          <div className="text-center m-10">
            <div className="flex justify-center items-center">
              <img
                src={`${import.meta.env.VITE_APP_OW_ICON_URL}/${
                  firstWeatherData.weather[0].icon
                }.png`}
                alt={firstWeatherData.weather[0].description}
              />
            </div>
            <p className="font-normal tracking-wider text-xl">
              {firstWeatherData.weather[0].main.toUpperCase()}
            </p>
            <p className="font-bold tracking-wider text-sm font-light text-gray-500">
              {cityName.toUpperCase()}
            </p>
            <p className="tracking-wider text-8xl font-light m-10">
              {Math.round(firstWeatherData.main.temp)}°
            </p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
