import React from 'react';
import Counters from './Counters';
import {useMeasureWindow} from './hooks/measureWindow';
import LoginForm from './LoginForm';
import {UserContext} from './contexts/user-context';
import Header from './header';
import Footer from './footer';

const App = () => {

  const user = {name: "Alisaie", surname: "Leveileur"};

  return <>
    <h2>Context example</h2>
    <UserContext.Provider value={user}>
      <Header />
      <Footer />
    </UserContext.Provider>
  </>
};

export default App;
