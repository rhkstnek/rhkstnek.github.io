import React, { useState } from "react";
import axios from "axios";


function App() {
  return (
    <div className="App">
      날씨입니다.
      <Weather 
      // place={place} 
      />
    </div>
  );
}

function Weather() {
  let aaa;
  const API_KEY = '3fe242d90e9fc48a354757311cfe53db';

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeather(latitude, longitude);

  };
  // const placeSection = document.querySelector('.place');
  const getWeather = (lat, lon) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
      .then((json) => {
        // let aaa = 'ss';
        let place = json.data.name;
        console.log(place)
      })
      .catch(() => {
        // 에러 처리
        console.log(`error`);
      });
  }
    return (
      <div>
        <br />
        <button onClick={() => {
          navigator.geolocation.getCurrentPosition(success);
        }}>사과주세요</button>
        <br/>
        {/* <span className="place">{aaa}</span> */}
        {/* <span className="place"></span> */}
      </div>
    )
}

export default App;
