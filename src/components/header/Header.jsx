import React, { useState } from 'react';

import hotel1 from '../../images/hotel-1.jpg';
import Select from 'react-select';
import { DatePicker } from '@mui/x-date-pickers';
import { makeStyles } from '@mui/styles';

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'transparent',
    outline: 'red',
    boxShadow: isFocused ? 'none' : 'red',
  }),
};

const optionsObj = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '93aaeff6bamsh4bbd3c8fc5e5949p1aaa6ajsnd645af32fc02',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  },
};

const useStyles = makeStyles((theme) => ({
  textField: {
    // minWidth: '20%',
    // maxWidth: '200px',
    zIndex: '10',
    fontSize: '14px',
  },
}));

function Header() {
  const locale = navigator.language;
  const classes = useStyles();

  const [inputCity, setInputCity] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputAdults, setInputAdults] = useState(0);
  const [inputChildren, setInputChildren] = useState(0);
  const [inputRooms, setInputRooms] = useState(0);
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  const searchHotelHandler = async function () {
    const fetchData = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${inputCity}&locale=${locale.toLowerCase()}`,
      optionsObj
    );
    if (!fetchData.ok) return;
    const res = await fetchData.json();
    console.log(res);

    setOptions(
      res.map((item) => ({
        value: item.name,
        label: item.name,
        destType: item['dest_type'],
        destId: item['dest_id'],
        destLabel: item.label,
      }))
    );
  };

  const onSearchHandler = async function (e) {
    e.preventDefault();
    const fetchData = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=${checkinDate}&checkout_date=${checkoutDate}&dest_id=-2097701&dest_type=city&${
        inputChildren > 0 ? `children_number=${inputChildren}` : ''
      }&adults_number=2&filter_by_currency=AED&order_by=popularity&locale=en-us&units=metric&room_number=1`,
      options
    );
  };

  console.log(inputAdults, inputChildren, inputRooms);

  return (
    <header className="h-[50vh] relative text-slate-600 text-base">
      <div className="h-full">
        <img
          src={hotel1}
          className="h-[100%] w-full bg-center object-cover brightness-95"
          alt="hotel"
        />
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-5  py-10 shadow-md bg-white/90 w-[53%] max-xl:w-[65%] max-lg:w-[90%] rounded-sm">
        <form className="flex flex-col relative text-base" onSubmit={onSearchHandler}>
          <Select
            styles={colourStyles}
            className="w-full h-full bg-transparent rounded-sm  p-1 py-2 outline-none placeholder:text-sm z-20"
            placeholder="search with city name"
            onInputChange={(e) => {
              setInputCity(e);
              if (inputCity.trim().length !== 0) {
                searchHotelHandler(inputCity);
              }
            }}
            value={selectedOption}
            options={options}
            onChange={(e) => setSelectedOption(e)}
            getOptionLabel={(option) => `${option.destLabel}`}
          />
          <div className="flex gap-2 flex-wrap px-1">
            <div className="flex w-[49%] max-md:w-full gap-2 justify-between">
              <DatePicker
                label="check-in"
                className={classes.textField}
                slotProps={{ textField: { size: 'small' } }}
                format="YYYY/MM/DD"
              />
              <DatePicker
                label="check-out"
                className={classes.textField}
                slotProps={{ textField: { size: 'small' } }}
                format="YYYY/MM/DD"
              />
            </div>
            <div className="border self-stretch h-full p-1.5 border-slate-300 w-[49%] rounded-sm max-md:w-[100%] max-lg:width-full">
              <div className="flex items-stretch justify-center h-full">
                <input
                  className="w-6 mr-1 text-sm text-center bg-transparent outline-none border border-slate-300"
                  type="tel"
                  value={inputAdults}
                  onChange={(e) => setInputAdults(e.target.value)}
                />
                <label className="mr-2">adult</label>
                <input
                  className="w-6 mr-1 text-sm text-center bg-transparent outline-none border border-slate-300"
                  type="tel"
                  value={inputChildren}
                  onChange={(e) => setInputChildren(e.target.value)}
                />
                <label className="mr-2">children</label>
                <input
                  className="w-6 mr-1 text-sm text-center bg-transparent outline-none border border-slate-300"
                  type="tel"
                  value={inputRooms}
                  onChange={(e) => setInputRooms(e.target.value)}
                />
                <label className="mr-2">rooms</label>
              </div>
            </div>
          </div>
          <button className="text-center border border-slate-400 bg-slate-800 text-slate-50 self-center px-[20%] py-2 hover:bg-white hover:text-slate-600 absolute -bottom-14  border-sm">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
