import React, { useState } from 'react';
import { useInput, useNumber } from './hooks';

const LoginForm = () => {
  const username = useInput('');
  const password = useInput('');

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