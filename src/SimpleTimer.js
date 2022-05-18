import {useNumber} from './hooks/hooks';
import {useEffect} from 'react';

const SimpleTimer = () => {
  const timer = useNumber(0);

  useEffect(() => {
    const interval = setInterval(timer.increase, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [timer]);

  return <>
    <h3>A simple timer</h3>
    <div>Timer is {timer.value}</div>
  </>
}
export default SimpleTimer;
