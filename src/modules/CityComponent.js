import styled from "styled-components";
import React from "react";


const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    @media all and (max-width:580px) {
    width:100%;
    padding: 5px;
  }
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
  @media all and (max-width:580px) {
    font-size: 15px;
    margin: 10px auto;
  }
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
  @media all and (max-width:580px) {
    width: 70px;
    height: 70px;
    margin: 0px auto;
  }
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={process.env.PUBLIC_URL + "/img/icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
      <p style={{ color: `red`, fontWeight: '600' }}>ex) seoul, paris, italy</p>
    </>
  );
};
export default CityComponent;
