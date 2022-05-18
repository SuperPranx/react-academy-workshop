import React from 'react';
import Apartment from './Apartment';

const ApartmentList = ({apartments, favorites, toggleFavorite}) => {
  return <>
    {
      apartments.map(
        apartment =>
          <Apartment toggleFavorite={toggleFavorite}
                     isFavorite={favorites.includes(apartment.id)}
                     key={apartment.id} {...apartment} />
    )}
  </>
};

export default ApartmentList;
