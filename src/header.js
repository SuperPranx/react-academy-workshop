import {useContext} from 'react';
import {UserContext} from './contexts/user-context';

const Header = () => {
  const { user } = useContext(UserContext);
  return user.name && user.surname ? <h3>The name is: {user.name} {user.surname}</h3> : 'No user :(';
}
export default Header;
