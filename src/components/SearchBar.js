import React from 'react';

const SearchBar = ({value, setValue}) => {
  return <>
    <input placeholder='Search' type='text' value={value} onChange={e => setValue(e.target.value)} />
  </>
};

export default SearchBar;
