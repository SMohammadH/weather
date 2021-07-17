import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ icon, city, description, temp }) => {
  return (
    <div className='absolute w-64 border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white'>
      <div className='text-md font-bold flex flex-col text-gray-900'>
        <span className='text-2xl'>{city}</span>
      </div>
      <div className='w-32 h-32 flex items-center justify-center'>
        <WeatherIcon size='150px' icon={icon} />
      </div>
      <p className='text-gray-700 mb-2'>{description}</p>
      <p className='mx-1 text-4xl font-bold mb-3'>{temp}º</p>
      <div className='flex justify-between w-full'>
        <div className='flex items-center text-gray-700 px-2'>
          <h1>svg here</h1>
          100 l/m<sup>2</sup>
        </div>
        <div className='flex items-center text-gray-700 px-2'>
          <h1>icon here</h1>
          20 km/h
        </div>
      </div>
      ;
    </div>
  );
};

export default WeatherCard;
