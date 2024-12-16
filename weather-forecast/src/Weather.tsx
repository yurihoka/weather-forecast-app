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

  const firstWeatherData = weatherData[0];
  const formatUnixTimeToDate = (unixTime: number): string => {
    const date = new Date(unixTime * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const formattedDate = firstWeatherData
    ? formatUnixTimeToDate(firstWeatherData.dt)
    : "";

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

  return (
    <div className="p-4">
      {firstWeatherData ? (
        <div className="p-7 w-100 h-70 m-auto bg-blue-300 rounded-md text-white">
          <div className="flex justify-between">
            <div>
              <p className="font-light tracking-wider text-sm">City Name</p>

              <div className="flex border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                <input
                  type="text"
                  placeholder="Search Something..."
                  className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
                  id="cityName"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-[#007bff] px-5 text-sm text-white"
                  onClick={getCityName}
                >
                  Search
                </button>
              </div>

              <p className="font-bold tracking-wider">{cityName}</p>
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_APP_OW_ICON_URL}/${
                  firstWeatherData.weather[0].icon
                }.png`}
                alt={firstWeatherData.weather[0].description}
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="font-light tracking-wider text-sm">
              Weather Condition
            </p>
            <p className="font-bold tracking-wider">
              {firstWeatherData.weather[0].main}
            </p>
          </div>
          <div className="mt-5 flex justify-between">
            <div>
              <p className="font-light tracking-wider text-sm">Date</p>
              <p className="font-bold tracking-wider text-sm">
                {formattedDate}
              </p>
            </div>
            <div>
              <p className="font-light tracking-wider text-sm">Temperature</p>
              <p className="font-bold tracking-wider text-sm">
                {Math.round(firstWeatherData.main.temp)}℃
              </p>
            </div>
            <div>
              <p className="font-light tracking-wider text-sm">Humidity</p>
              <p className="font-bold tracking-wider text-sm">
                {firstWeatherData.main.humidity}%
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
