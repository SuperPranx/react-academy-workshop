import React, {useState} from 'react';
import {UserContext} from './user-context';

const UserManager = ({children}) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserManager;
