import React from 'react';
import Header from './components/Header';
import UserManager from './contexts/user-manager';
import UserForm from './components/UserForm';

const App = () => {

  return <>
    <h2>Context example</h2>
    <UserManager>
      <Header />
      <UserForm />
    </UserManager>
  </>
};

export default App;
