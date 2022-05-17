import {useEffect, useState} from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  }

  return {value, toggle};
}

export const useNumber = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increase = () => {
    setValue(value + 1);
  }

  const decrease = () => {
    setValue(value - 1);
  }

  return {value, increase, decrease};
}

export const useInput = (initialValue = '', persistKey = null) => {
  const [value, setValue] = useState(persistKey ? window.localStorage.getItem(persistKey) ? window.localStorage.getItem(persistKey): '' : initialValue);

  useEffect(() => {
    if (persistKey) {
      window.localStorage.setItem(persistKey, value);
    }
  });

  const onChange = event => {
    setValue(event.target.value);
  }

  const clear = () => {
    setValue('');
  }

  const isValid = value && value.trim() !== '';

  return {isValid, value, clear, inputProps: {value, onChange}};
}
