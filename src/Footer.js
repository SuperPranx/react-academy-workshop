import {useContext} from 'react';
import {UserContext} from './contexts/user-context';

const Footer = () => {
  const {user} = useContext(UserContext);
  return <h3>The surname is: {user.surname}</h3>
}
export default Footer;
