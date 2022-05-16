import React from 'react';

const Apartment = ({title, price, rating = 5, imageUrl, isAvailable = true}) => {
  return <>
    <img src={imageUrl} alt='' />
    <div>
      <svg width={10} height={10}>
        <circle fill={isAvailable ? 'green' : 'red'} cx={5} cy={5} r={5} />
      </svg>&nbsp;
      <b>{title}</b>
      <div>${price} per night</div>
      <div>{Array(rating).fill('⭐')}</div>
    </div>
  </>
};

export default Apartment;