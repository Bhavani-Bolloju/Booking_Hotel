import React, { useState } from 'react';

import hotel from '../../images/hotel.jpg';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '93aaeff6bamsh4bbd3c8fc5e5949p1aaa6ajsnd645af32fc02',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  },
};

function Header() {
  const locale = navigator.language;

  const [inputCity, setInputCity] = useState('');

  const searchHotelHandler = async function () {
    const fetchData = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${inputCity}&locale=${locale.toLowerCase()}`,
      options
    );
    const res = await fetchData.json();
    console.log(res);
  };

  return (
    <header className="h-[50vh] relative text-slate-600 text-base">
      <div className="h-full">
        <img src={hotel} className="h-[100%] w-full object-cover" alt="hotel" />
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-10 py-10 shadow-md bg-white/90 w-2/5 rounded-sm">
        <form
          className="flex flex-col relative text-base"
          // onSubmit={searchHotelHandler}
        >
          <input
            type="text"
            className="w-full border border-slate-400 rounded-sm bg-transparent p-1 py-1.5 outline-none placeholder:text-sm"
            placeholder="search with city name"
            onChange={(e) => {
              setInputCity(e.target.value);
              if (inputCity.trim().length !== 0) {
                searchHotelHandler(inputCity);
              }
            }}
          />
          <button className="text-center border border-slate-400 bg-slate-600 text-slate-50 self-center px-[20%] py-1.5 hover:bg-white hover:text-slate-600 absolute -bottom-14  border-sm">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
