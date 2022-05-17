import React, { useState } from 'react';
import Apartment from './Apartment';
import ApartmentList from './ApartmentList';

import apartments from './apartments.json';
import Counters from './Counters';
import { useToggle } from './hooks';
import LoginForm from './LoginForm';

const App = () => {
  const counterToggle = useToggle();

  return <>
    <LoginForm />
    <br />
    <br />
    <br />
    <div><b>Counters list</b></div>
    <button onClick={counterToggle.toggle}>{counterToggle.value ? 'Hide' : 'Show'} counters</button>
    {counterToggle.value ? <Counters /> : null}
    <br />
    <br />
    <br />
    <div><b>Apartment list</b></div>
    <ApartmentList apartments={apartments} />
  </>
};

export default App;
