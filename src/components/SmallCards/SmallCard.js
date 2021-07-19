import { useState, useEffect } from 'react';
import WeatherIcon from '../WeatherIcon';
import { IoCloseCircle } from 'react-icons/io5';

const SmallCard = ({ city, cityClicked, removeCity, cityList }) => {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [name, setName] = useState('');
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    fetch(`${API_URL}${city}&appid=${apiKey}&units=metric&lang=fa`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === '404') {
          localStorage.setItem(
            'cityList',
            JSON.stringify(cityList.filter(e => e !== city))
          );
        }
        setName(data.name);
        setTemp(data.main.temp);
        setIcon(data.weather[0].icon);
      })
      .catch(err => console.log(err));
  }, [city, apiKey, cityList]);

  if (!temp) {
    return '';
  }

  return (
    <div className='relative'>
      <span
        onClick={() => removeCity(city)}
        className='absolute -top-2 -right-2 text-red-600 text-4xl cursor-pointer'
      >
        <IoCloseCircle />
      </span>
      <div
        onClick={() => cityClicked(city)}
        className='bg-white border-blue-400 dark:bg-gray-800 bg-opacity-60 border-opacity-60 | p-2 border-solid rounded-3xl border | flex justify-around cursor-pointer | hover:bg-blue-200 dark:hover:bg-indigo-600 hover:border-blue-600 | transition-colors duration-500'
      >
        <div className='pt-2'>
          <WeatherIcon
            className='w-16 h-16 object-cover'
            size='55px'
            icon={icon}
          />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-gray-900 dark:text-gray-300 font-semibold'>
            {name}
          </p>
          <p className='text-black dark:text-gray-100 text-justify font-semibold'>
            {temp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
