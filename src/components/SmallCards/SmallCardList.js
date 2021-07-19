import SmallCard from './SmallCard';

const SmallCardList = ({ cityList, cityClicked, removeCity }) => {
  return (
    <div className='relative flex justify-center pt-4 md:py-10'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
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
