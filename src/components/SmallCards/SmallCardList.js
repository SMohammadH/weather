import SmallCard from './SmallCard';

const SmallCardList = ({ cityList, cityClicked, removeCity }) => {
  return (
    <div className='h-auto hidden dark:bg-gray-900 px-44 md:flex flex-col justify-center sm:py-12'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {cityList.map(city => (
          <SmallCard
            key={city}
            city={city}
            cityClicked={cityClicked}
            cityList={cityList}
            removeCity={removeCity}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallCardList;
