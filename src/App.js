import React from 'react';
import Header from './Header';
import Footer from './Footer';
import UserManager from './contexts/user-manager';
import UserForm from './UserForm';
import {UserContext} from './contexts/user-context';

const App = () => {

  return <>
    <h2>Context example</h2>
    <UserManager>
      <Header />
      <UserForm />
      {/*<Footer />*/}
    </UserManager>
  </>
};

export default App;
