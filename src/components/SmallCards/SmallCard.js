import { useState, useEffect } from 'react';
import WeatherIcon from '../WeatherIcon';
import { AiFillCloseSquare } from 'react-icons/ai';

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
    <div onClick={() => cityClicked(city)} className='relative'>
      <span
        onClick={() => removeCity(city)}
        className='absolute -top-2 -right-2 text-gray-600 text-3xl cursor-pointer'
      >
        <AiFillCloseSquare />
      </span>
      <div className='bg-gray-100 w-36 md:w-52 border-gray-400 dark:bg-gray-800 border-opacity-60 | p-2 border-solid  border | flex justify-around cursor-pointer | hover:bg-white dark:hover:bg-indigo-600 hover:border-gray-300 | transition-colors duration-300'>
        <div className='pt-2'>
          <div className='h-16 w-16 flex items-center justify-center'>
            <WeatherIcon icon={icon} />
          </div>
        </div>
        <div className='flex flex-col justify-center pr-3'>
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
