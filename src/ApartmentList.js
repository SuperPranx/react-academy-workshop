import React from 'react';
import Apartment from './Apartment';

const ApartmentList = ({appartments}) => {
  return <>
    {appartments.map(
      appartment => <Apartment key={appartment.key} {...appartment} />
    )}
  </>
};

export default ApartmentList;