import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CityComponent from "../modules/CityComponent";
import WeatherComponent from "../modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": process.env.PUBLIC_URL + "/img/icons/sunny.svg",
  "01n": process.env.PUBLIC_URL + "/img/icons/night.svg",
  "02d": process.env.PUBLIC_URL + "/img/icons/day.svg",
  "02n": process.env.PUBLIC_URL + "/img/icons/cloudy-night.svg",
  "03d": process.env.PUBLIC_URL + "/img/icons/cloudy.svg",
  "03n": process.env.PUBLIC_URL + "/img/icons/cloudy.svg",
  "04d": process.env.PUBLIC_URL + "/img/icons/perfect-day.svg",
  "04n": process.env.PUBLIC_URL + "/img/icons/cloudy-night.svg",
  "09d": process.env.PUBLIC_URL + "/img/icons/rain.svg",
  "09n": process.env.PUBLIC_URL + "/img/icons/rain-night.svg",
  "10d": process.env.PUBLIC_URL + "/img/icons/rain.svg",
  "10n": process.env.PUBLIC_URL + "/img/icons/rain-night.svg",
  "11d": process.env.PUBLIC_URL + "/img/icons/storm.svg",
  "11n": process.env.PUBLIC_URL + "/img/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function Last() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    )
    .catch(()=>{
      console.log(`error`);
    });
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default Last;
