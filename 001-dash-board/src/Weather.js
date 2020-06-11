import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import config from "./config";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [coords, setCoords] = useState({});
    const API_KEY = config.WEATHER_API_KEY;
    const { latitude, longitude } = coords;
    const { weather, city, temperature } = weatherData;

    // => 좌표값을 받아와서 coords state에 저장.
    const getCoords = (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
    };

    // => 좌표값을 받지 못했을 때, 띄워줄 error 메세지.
    const errorMsg = () => {
        alert("I can't find you.");
    };

    // => useCallback(shouldComponentUpdate)을 사용하여, 비동기적으로 날씨API를 받아서 weatherData에 저장.
    const getWeather = useCallback(async () => {
        //  useCallback : 메모이제이션된 콜백을 반환. 메모이제이션된 버전은 의존성이 변경되었을 때에만 변경.
        // :: 위도와 경도가 coords에 저장됐다면, API data를 weatherData에 저장, 저장이 아직 안된상태라면 console창에 문구 띄워줌.
        if (latitude && longitude) {
            const {
                data: { weather, name, main },
            } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            setWeatherData({ weather: weather[0].main, city: name, temperature: main.temp });
        } else {
            console.log("Failed get API.");
        }
    }, [API_KEY, latitude, longitude]); // useCallback에 쓰인 참조값은 모두 의존성 값의 배열에 나타나야 함.

    // => 윈도우 내장 객체를 이용해 현재 device에 좌표값을 받아오고, getWeather함수를 실행.
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getCoords, errorMsg);
        getWeather();
    }, [getWeather]);

    console.log(latitude, longitude);
    console.log(weatherData);

    return (
        <div className="weather">
            <span>위치: {city}</span>
            <span>날씨: {weather}</span>
            <span>온도: {temperature}℃</span>
        </div>
    );
}
