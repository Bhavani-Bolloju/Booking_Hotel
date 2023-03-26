import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const [hotels, setHotels] = useState(null);
  const getHotelsData = function (results) {
    setHotels(results);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Header onFetchHotelsData={getHotelsData} />
        <Main hotels={hotels} />
      </div>
    </LocalizationProvider>
  );
}

export default App;
