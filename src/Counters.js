import React, { useState } from 'react';
import { useNumber } from './hooks';

const Counters = () => {
  const counter = useNumber();

  return <>
    <div>Counter is currently {counter.value}</div>
    <button onClick={counter.decrease}>Decrease</button>
    <button onClick={counter.increase}>Increase</button>
  </>
}

export default Counters;