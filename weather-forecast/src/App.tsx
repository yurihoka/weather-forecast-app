import { useEffect, useState } from "react";

const fetchWeatherApi = () => {
  // const results = await fetch(
  //   "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&&units=metric&appid=c54decd8137c19d79f34bcb2b31922a3"
  // );

  // if (!results.ok) {
  //   throw new Error(`HTTP error! status: ${results.status}`);
  // }

  // const data = await results.json();
  // console.log("weatherData: ", data);

  const data = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1724306400,
        main: {
          temp: 18.7,
          feels_like: 18.79,
          temp_min: 18.7,
          temp_max: 21.34,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 83,
          temp_kf: -2.64,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 0.91,
          deg: 210,
          gust: 0.16,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-22 06:00:00",
      },
      {
        dt: 1724317200,
        main: {
          temp: 21.05,
          feels_like: 21.17,
          temp_min: 21.05,
          temp_max: 25.76,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 75,
          temp_kf: -4.71,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 2.53,
          deg: 42,
          gust: 2.05,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-22 09:00:00",
      },
      {
        dt: 1724328000,
        main: {
          temp: 25.33,
          feels_like: 25.51,
          temp_min: 25.33,
          temp_max: 28.64,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 61,
          temp_kf: -3.31,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 7,
        },
        wind: {
          speed: 3.82,
          deg: 42,
          gust: 3.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-22 12:00:00",
      },
      {
        dt: 1724338800,
        main: {
          temp: 25.06,
          feels_like: 25.48,
          temp_min: 25.06,
          temp_max: 25.06,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 1,
          deg: 2,
          gust: 1.33,
        },
        visibility: 10000,
        pop: 0.88,
        rain: {
          "3h": 1.71,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-22 15:00:00",
      },
      {
        dt: 1724349600,
        main: {
          temp: 21.21,
          feels_like: 21.66,
          temp_min: 21.21,
          temp_max: 21.21,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 60,
        },
        wind: {
          speed: 0.49,
          deg: 73,
          gust: 1.63,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.88,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-22 18:00:00",
      },
      {
        dt: 1724360400,
        main: {
          temp: 19.63,
          feels_like: 20.05,
          temp_min: 19.63,
          temp_max: 19.63,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 18,
        },
        wind: {
          speed: 2.3,
          deg: 209,
          gust: 1.29,
        },
        visibility: 10000,
        pop: 0.41,
        rain: {
          "3h": 0.3,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-22 21:00:00",
      },
      {
        dt: 1724371200,
        main: {
          temp: 19.36,
          feels_like: 19.65,
          temp_min: 19.36,
          temp_max: 19.36,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 14,
        },
        wind: {
          speed: 2.38,
          deg: 217,
          gust: 1.65,
        },
        visibility: 10000,
        pop: 0.08,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-23 00:00:00",
      },
      {
        dt: 1724382000,
        main: {
          temp: 18.86,
          feels_like: 19.02,
          temp_min: 18.86,
          temp_max: 18.86,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 948,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 20,
        },
        wind: {
          speed: 2.16,
          deg: 220,
          gust: 1.57,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-23 03:00:00",
      },
      {
        dt: 1724392800,
        main: {
          temp: 21.23,
          feels_like: 21.52,
          temp_min: 21.23,
          temp_max: 21.23,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 949,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 27,
        },
        wind: {
          speed: 1.45,
          deg: 235,
          gust: 1.13,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-23 06:00:00",
      },
      {
        dt: 1724403600,
        main: {
          temp: 27.61,
          feels_like: 28.27,
          temp_min: 27.61,
          temp_max: 27.61,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 950,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 35,
        },
        wind: {
          speed: 1.57,
          deg: 37,
          gust: 1.59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-23 09:00:00",
      },
      {
        dt: 1724414400,
        main: {
          temp: 30.63,
          feels_like: 30.72,
          temp_min: 30.63,
          temp_max: 30.63,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 949,
          humidity: 42,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 60,
        },
        wind: {
          speed: 1.81,
          deg: 41,
          gust: 2.18,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-23 12:00:00",
      },
      {
        dt: 1724425200,
        main: {
          temp: 29.93,
          feels_like: 30.36,
          temp_min: 29.93,
          temp_max: 29.93,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 949,
          humidity: 46,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 66,
        },
        wind: {
          speed: 2.05,
          deg: 32,
          gust: 2.13,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.1,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-23 15:00:00",
      },
      {
        dt: 1724436000,
        main: {
          temp: 23.52,
          feels_like: 23.94,
          temp_min: 23.52,
          temp_max: 23.52,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 950,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 64,
        },
        wind: {
          speed: 0.53,
          deg: 107,
          gust: 1.39,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.19,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-23 18:00:00",
      },
      {
        dt: 1724446800,
        main: {
          temp: 21.55,
          feels_like: 21.93,
          temp_min: 21.55,
          temp_max: 21.55,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 951,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 36,
        },
        wind: {
          speed: 2.89,
          deg: 208,
          gust: 2.26,
        },
        visibility: 10000,
        pop: 0.22,
        rain: {
          "3h": 0.11,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-23 21:00:00",
      },
      {
        dt: 1724457600,
        main: {
          temp: 20.92,
          feels_like: 21,
          temp_min: 20.92,
          temp_max: 20.92,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 951,
          humidity: 74,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 21,
        },
        wind: {
          speed: 3.07,
          deg: 214,
          gust: 2.48,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-24 00:00:00",
      },
      {
        dt: 1724468400,
        main: {
          temp: 20.14,
          feels_like: 19.83,
          temp_min: 20.14,
          temp_max: 20.14,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 951,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.77,
          deg: 215,
          gust: 2.16,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-24 03:00:00",
      },
      {
        dt: 1724479200,
        main: {
          temp: 21.47,
          feels_like: 21.29,
          temp_min: 21.47,
          temp_max: 21.47,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 951,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.89,
          deg: 219,
          gust: 1.79,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-24 06:00:00",
      },
      {
        dt: 1724490000,
        main: {
          temp: 28.72,
          feels_like: 28.33,
          temp_min: 28.72,
          temp_max: 28.72,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 952,
          humidity: 40,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 0.85,
          deg: 10,
          gust: 1.07,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-24 09:00:00",
      },
      {
        dt: 1724500800,
        main: {
          temp: 31.45,
          feels_like: 30.42,
          temp_min: 31.45,
          temp_max: 31.45,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 951,
          humidity: 32,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 4,
        },
        wind: {
          speed: 1.36,
          deg: 37,
          gust: 2.71,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-24 12:00:00",
      },
      {
        dt: 1724511600,
        main: {
          temp: 30.91,
          feels_like: 30.15,
          temp_min: 30.91,
          temp_max: 30.91,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 950,
          humidity: 35,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 54,
        },
        wind: {
          speed: 1.27,
          deg: 58,
          gust: 1.63,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-24 15:00:00",
      },
      {
        dt: 1724522400,
        main: {
          temp: 24.12,
          feels_like: 24.15,
          temp_min: 24.12,
          temp_max: 24.12,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 950,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 77,
        },
        wind: {
          speed: 2.29,
          deg: 196,
          gust: 1.98,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-24 18:00:00",
      },
      {
        dt: 1724533200,
        main: {
          temp: 21.59,
          feels_like: 21.37,
          temp_min: 21.59,
          temp_max: 21.59,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 950,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 3.28,
          deg: 212,
          gust: 2.63,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-24 21:00:00",
      },
      {
        dt: 1724544000,
        main: {
          temp: 20.75,
          feels_like: 20.21,
          temp_min: 20.75,
          temp_max: 20.75,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 950,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 38,
        },
        wind: {
          speed: 2.84,
          deg: 219,
          gust: 1.92,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-25 00:00:00",
      },
      {
        dt: 1724554800,
        main: {
          temp: 20.24,
          feels_like: 19.6,
          temp_min: 20.24,
          temp_max: 20.24,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 949,
          humidity: 49,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 2.83,
          deg: 210,
          gust: 2.04,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-25 03:00:00",
      },
      {
        dt: 1724565600,
        main: {
          temp: 21.66,
          feels_like: 21.32,
          temp_min: 21.66,
          temp_max: 21.66,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 950,
          humidity: 55,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.23,
          deg: 213,
          gust: 2.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-25 06:00:00",
      },
      {
        dt: 1724576400,
        main: {
          temp: 29.12,
          feels_like: 28.47,
          temp_min: 29.12,
          temp_max: 29.12,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 950,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 4,
        },
        wind: {
          speed: 1.14,
          deg: 50,
          gust: 0.93,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-25 09:00:00",
      },
      {
        dt: 1724587200,
        main: {
          temp: 31.59,
          feels_like: 30.58,
          temp_min: 31.59,
          temp_max: 31.59,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 949,
          humidity: 32,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 2.03,
          deg: 39,
          gust: 1.52,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-25 12:00:00",
      },
      {
        dt: 1724598000,
        main: {
          temp: 31.25,
          feels_like: 30.43,
          temp_min: 31.25,
          temp_max: 31.25,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 948,
          humidity: 34,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 11,
        },
        wind: {
          speed: 2.04,
          deg: 40,
          gust: 1.34,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-25 15:00:00",
      },
      {
        dt: 1724608800,
        main: {
          temp: 24.38,
          feels_like: 24.41,
          temp_min: 24.38,
          temp_max: 24.38,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 8,
        },
        wind: {
          speed: 1.95,
          deg: 182,
          gust: 1.92,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-25 18:00:00",
      },
      {
        dt: 1724619600,
        main: {
          temp: 22.14,
          feels_like: 22.13,
          temp_min: 22.14,
          temp_max: 22.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 66,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 3.05,
          deg: 211,
          gust: 2.99,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-25 21:00:00",
      },
      {
        dt: 1724630400,
        main: {
          temp: 21.72,
          feels_like: 21.62,
          temp_min: 21.72,
          temp_max: 21.72,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 2.22,
          deg: 219,
          gust: 1.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-26 00:00:00",
      },
      {
        dt: 1724641200,
        main: {
          temp: 20.99,
          feels_like: 20.82,
          temp_min: 20.99,
          temp_max: 20.99,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 40,
        },
        wind: {
          speed: 1.83,
          deg: 233,
          gust: 1.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-26 03:00:00",
      },
      {
        dt: 1724652000,
        main: {
          temp: 22.39,
          feels_like: 22.36,
          temp_min: 22.39,
          temp_max: 22.39,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 65,
        },
        wind: {
          speed: 1.21,
          deg: 227,
          gust: 1.09,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 06:00:00",
      },
      {
        dt: 1724662800,
        main: {
          temp: 28.14,
          feels_like: 28.34,
          temp_min: 28.14,
          temp_max: 28.14,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 947,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.95,
          deg: 25,
          gust: 0.94,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 09:00:00",
      },
      {
        dt: 1724673600,
        main: {
          temp: 30.68,
          feels_like: 30.37,
          temp_min: 30.68,
          temp_max: 30.68,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 945,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 1.78,
          deg: 41,
          gust: 1.81,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 12:00:00",
      },
      {
        dt: 1724684400,
        main: {
          temp: 28.56,
          feels_like: 29,
          temp_min: 28.56,
          temp_max: 28.56,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 944,
          humidity: 49,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.92,
          deg: 96,
          gust: 2.64,
        },
        visibility: 10000,
        pop: 0.46,
        rain: {
          "3h": 0.24,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 15:00:00",
      },
      {
        dt: 1724695200,
        main: {
          temp: 16.79,
          feels_like: 16.95,
          temp_min: 16.79,
          temp_max: 16.79,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 946,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 502,
            main: "Rain",
            description: "heavy intensity rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.92,
          deg: 221,
          gust: 4.53,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 15.66,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 18:00:00",
      },
      {
        dt: 1724706000,
        main: {
          temp: 16.98,
          feels_like: 17.06,
          temp_min: 16.98,
          temp_max: 16.98,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 948,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 80,
        },
        wind: {
          speed: 1.71,
          deg: 9,
          gust: 4.36,
        },
        visibility: 10000,
        pop: 0.2,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-26 21:00:00",
      },
      {
        dt: 1724716800,
        main: {
          temp: 16.72,
          feels_like: 16.8,
          temp_min: 16.72,
          temp_max: 16.72,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 69,
        },
        wind: {
          speed: 2.26,
          deg: 220,
          gust: 1.46,
        },
        visibility: 10000,
        pop: 0.07,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-27 00:00:00",
      },
      {
        dt: 1724727600,
        main: {
          temp: 16.81,
          feels_like: 16.92,
          temp_min: 16.81,
          temp_max: 16.81,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 947,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 84,
        },
        wind: {
          speed: 1.05,
          deg: 280,
          gust: 0.75,
        },
        visibility: 10000,
        pop: 0.64,
        rain: {
          "3h": 0.54,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-08-27 03:00:00",
      },
    ],
    city: {
      id: 3163858,
      name: "Zocca",
      coord: {
        lat: 44.34,
        lon: 10.99,
      },
      country: "IT",
      population: 4593,
      timezone: 7200,
      sunrise: 1724300864,
      sunset: 1724350223,
    },
  };

  return data;
};

export default function App() {
  const weatherDataDoc = fetchWeatherApi();
  const [weatherData, setWeatherData] = useState<{
    city: string;
    country: string;
    temperature: string | number;
    weather: string;
    day: string | number;
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
