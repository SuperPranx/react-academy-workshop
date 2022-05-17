import React, {useEffect, useState} from 'react';
import { useNumber } from './hooks/hooks';
import {useDocumentTitle} from './hooks/counterHooks';

const Counters = () => {
  const counter = useNumber();

  useDocumentTitle(`Counter value is ${counter.value}`)

  return <>
    <div>Counter is currently {counter.value}</div>
    <button onClick={counter.decrease}>Decrease</button>
    <button onClick={counter.increase}>Increase</button>
  </>
}

export default Counters;
