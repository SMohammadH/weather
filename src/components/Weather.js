import { useState, useEffect } from 'react';
import SmallCardList from './SmallCards/SmallCardList';
import WeatherCard from './WeatherCard';
import WeatherForm from './WeatherForm';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const firstCity = 'tehran';

function Weather() {
  const [city, setCity] = useState(
    JSON.parse(localStorage.getItem('selectedCity')) || 'تهران'
  );
  const [cityOnCard, setCityOnCard] = useState('');
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState(null);
  const [cityList, setCityList] = useState(
    JSON.parse(localStorage.getItem('cityList')) || []
  );
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(
        `${API_URL}${firstCity}&appid=${apiKey}&units=metric&lang=fa`
      );
      const newData = await res.json();
      if (!newData) {
        console.log('no data');
      }
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    async function updateData() {
      const res = await fetch(
        `${API_URL}${city}&appid=${apiKey}&units=metric&lang=fa`
      );
      const data = await res.json();
      if (data.main) {
        setCityOnCard(data.name);
        setTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setIcon(data.weather[0].icon);
      }
      return;
    }
    updateData();
  }, [city]);

  useEffect(() => {
    localStorage.setItem('cityList', JSON.stringify(cityList));
  }, [cityList]);

  useEffect(() => {
    localStorage.setItem('selectedCity', JSON.stringify(city));
  }, [city]);

  const submitHandler = e => {
    e.preventDefault();
    setCity(inputValue);

    if (cityList.indexOf(inputValue) === -1 && inputValue.length > 0) {
      setCityList(preCityList => [...preCityList, inputValue]);
    }
    // if (city && temp) {
    //   setCityList(preCityList => [...preCityList, inputValue]);
    // }

    setInputValue('');
  };

  const cityClicked = e => {
    setCity(e);
  };

  const removeCity = e => {
    setCityList(cityList.filter(city => e !== city));
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-200 via-white  to-green-200'>
      {cityList && (
        <SmallCardList
          cityList={cityList}
          cityClicked={cityClicked}
          removeCity={removeCity}
        />
      )}

      <WeatherForm
        submitHandler={submitHandler}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <div className='flex justify-center'>
        {cityOnCard && (
          <WeatherCard
            icon={icon}
            city={cityOnCard}
            temp={temp}
            description={description}
          />
        )}
      </div>
    </div>
  );
}

export default Weather;
