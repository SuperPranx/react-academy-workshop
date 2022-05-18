import React from 'react';

const Apartment = (
  {
    id,
    title,
    price,
    rating = 5,
    imageUrl,
    isAvailable = true,
    isFavorite = false,
    toggleFavorite
  }) => {
  return <>
    <img src={imageUrl} alt='' /> <button onClick={() => toggleFavorite(id)}>{isFavorite ? 'Remove' : 'Set'} favorite</button>
    <div>
      <svg width={10} height={10}>
        <circle fill={isAvailable ? 'green' : 'red'} cx={5} cy={5} r={5} />
      </svg>&nbsp;
      <b>{title}</b> {isFavorite ? '💙' : ''}
      <div>${price} per night</div>
      <div>{Array(rating).fill('⭐')}</div>
    </div>
  </>
};

export default Apartment;
