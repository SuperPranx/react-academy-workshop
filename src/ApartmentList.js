import React from 'react';
import Apartment from './Apartment';

const ApartmentList = ({apartments}) => {
  return <>
    {apartments.map(
      apartment => <Apartment key={apartment.key} {...apartment} />
    )}
  </>
};

export default ApartmentList;
