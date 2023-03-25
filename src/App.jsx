import React from 'react';
import useFetch from './hooks/use-fetch';
import Header from './components/header/Header';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '93aaeff6bamsh4bbd3c8fc5e5949p1aaa6ajsnd645af32fc02',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
  },
};

function App() {
  // const { data, error, isLoading } = useFetch(
  //   'locations?name=Hyderabad&locale=en-us',
  //   options
  // );
  // console.log(data);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
