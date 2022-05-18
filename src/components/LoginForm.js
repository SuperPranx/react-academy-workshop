import React from 'react';
import { useInput } from '../hooks/hooks';

const LoginForm = () => {
  const username = useInput('', 'username');
  const password = useInput('', 'password');

  const clearAll = () => {
    username.clear();
    password.clear();
  }

  return <>
    <div><button onClick={clearAll}>Clear All</button></div>
    <div><b>Please enter login credentials:</b></div>
    <div><label>Username: </label><input type="text" {...username.inputProps} /></div>
    <div><label>Password: </label><input type="password" {...password.inputProps} /></div>
    <div>Username: {username.value} | Password: {password.value}</div>
  </>
}

export default LoginForm;
