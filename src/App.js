import React, { useState } from 'react';
import Apartment from './Apartment';
import ApartmentList from './ApartmentList';

import apartments from './apartments.json';
import {useInput, useNumber, useToggle} from './hooks';
import SearchBar from './SearchBar';

const App = () => {
  const showAllApartments = useToggle(false);
  const [searchValue, setSearchValue] = useState('');

  const bySearchValue = (apartment) => {
    return apartment.title.toLowerCase().includes(searchValue.toLowerCase());
  }

  const byAvailability = (apartment) => {
    return apartment.isAvailable;
  }

  const filteredApartments = showAllApartments.value ?
      apartments.filter(bySearchValue) : apartments.filter(bySearchValue).filter(byAvailability);

  const numApartments = filteredApartments.length;

  return <>
    <div><b>Apartment list</b></div>
    <div>
      <button onClick={showAllApartments.toggle}>Show {showAllApartments.value ? 'only available' : 'all'}</button>
      <br />
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <br />
      {numApartments ? `Found ${numApartments} of ${apartments.length}` : 'No apartments found'}
    </div>
    <ApartmentList
      apartments={filteredApartments} />
  </>
};

export default App;
