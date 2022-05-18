import React, {useState} from 'react';
import {useToggle} from './hooks/hooks';
import SearchBar from './SearchBar';
import ApartmentList from './ApartmentList';

import apartments from './apartments.json';
import SimpleTimer from './SimpleTimer';

const App = () => {
  const showAllApartments = useToggle(false);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([1, 3, 5, 7]);

  const bySearchValue = (apartment) => {
    return apartment.title.toLowerCase().includes(searchValue.toLowerCase());
  }

  const byAvailability = (apartment) => {
    return apartment.isAvailable;
  }

  const filteredApartments = showAllApartments.value ?
    apartments.filter(bySearchValue) : apartments.filter(bySearchValue).filter(byAvailability);

  const toggleFavorite = key => {
    setFavorites(favorites.includes(key) ? favorites.filter(item => item !== key) : [...favorites, key]);
  }

  const numApartments = filteredApartments.length;

  return <>
    <SimpleTimer />
    <br />
    <div><b>Apartment list</b></div>
    <div>
      <button onClick={showAllApartments.toggle}>Show {showAllApartments.value ? 'only available' : 'all'}</button>
      <br />
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <br />
      {numApartments ? `Found ${numApartments} of ${apartments.length}` : 'No apartments found'}
    </div>
    <ApartmentList
      apartments={filteredApartments}
      favorites={favorites}
      toggleFavorite={toggleFavorite}/>
  </>
};

export default App;
