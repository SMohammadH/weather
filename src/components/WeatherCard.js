import WeatherIcon from './WeatherIcon';
const WeatherCard = ({ icon, city, description, temp }) => {
  return (
    <div className='absolute w-80 border border-gray-400 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-300 flex flex-col justify-center items-center text-center p-6'>
      <div className='text-md font-bold flex flex-col text-gray-900'>
        <span className='text-2xl'>{city}</span>
      </div>
      <div className='my-6 w-32 h-32 flex items-center justify-center'>
        <WeatherIcon size='150px' icon={icon} />
      </div>
      <p className='text-gray-700 mb-2'>{description}</p>
      <p className='mx-1 text-4xl font-bold mb-3'>{temp}º</p>
      {/* <div className='flex justify-between w-full'>
        <div className='flex items-center text-gray-700 px-2'>
          <h1>svg here</h1>
          100 l/m<sup>2</sup>
        </div>
        <div className='flex items-center text-gray-700 px-2'>
          <h1>icon here</h1>
          20 km/h
        </div>
      </div> */}
    </div>
  );
};

export default WeatherCard;
