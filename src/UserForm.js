import React, {useContext} from 'react';
import { useInput } from './hooks/hooks';
import {UserContext} from './contexts/user-context';

const UserForm = () => {
  const {setUser} = useContext(UserContext);

  const name = useInput('');
  const surname = useInput('');

  const clearAll = () => {
    name.clear();
    surname.clear();
  }

  const submit = () => {
    let user = {name: name.value, surname: surname.value};
    setUser(user);
  }

  return <>
    <div><button onClick={clearAll}>Clear All</button></div>
    <div><b>Please enter login credentials:</b></div>
    <div><label>Name: </label><input type="text" {...name.inputProps} /></div>
    <div><label>Surname: </label><input type="text" {...surname.inputProps} /></div>
    <button onClick={submit}>Click me!</button>
  </>
}

export default UserForm;
