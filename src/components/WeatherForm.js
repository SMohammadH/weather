const WeatherForm = ({ submitHandler, inputValue, setInputValue }) => {
  return (
    <div className='relative my-5 block m-auto text-center md:px-36'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={inputValue}
          placeholder='نام شهر را وارد کنید'
          onChange={e => setInputValue(e.target.value)}
          className='w-80 text-right py-3 px-16 border bg-gray-50 focus:bg-white border-gray-400 outline-none |  hover:border-blue-300 | transition duration-200'
        />
      </form>
    </div>
  );
};

export default WeatherForm;
