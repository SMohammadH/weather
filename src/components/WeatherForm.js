const WeatherForm = ({ submitHandler, inputValue, setInputValue }) => {
  return (
    <div className=' my-5 block m-auto text-center px-36'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={inputValue}
          placeholder='نام شهر را وارد کنید'
          onChange={e => setInputValue(e.target.value)}
          className='text-right py-3 px-12 border border-green-600 rounded-full outline-none |  hover:border-blue-300 | transition duration-200'
        />
      </form>
    </div>
  );
};

export default WeatherForm;
