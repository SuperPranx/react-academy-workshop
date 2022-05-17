import {useContext} from 'react';
import {UserContext} from './contexts/user-context';

const Header = () => {
  const { user } = useContext(UserContext);
  return <h3>The name is: { user.name }</h3>
}
export default Header;
