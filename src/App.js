import React from 'react';
import Counters from './Counters';
import {useMeasureWindow} from './hooks/measureWindow';

const App = () => {

  const {width, height} = useMeasureWindow();

  return <>
    <div><b>Counters</b></div>
    <Counters />
    <div>Width is: {width}<br />Height is: {height}</div>
  </>
};

export default App;
