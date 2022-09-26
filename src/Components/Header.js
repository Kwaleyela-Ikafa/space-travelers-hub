import { Link } from 'react-router-dom';
import logo from '../asses/space-traveler-logo.png';

const Header = () => (
  <header>
    <div>
      <img src={logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <nav>
      <Link to="/">Rockets</Link>
      <Link to="/Missions">Missions</Link>
      <Link to="/MyProfile">MyProfile</Link>
    </nav>
  </header>
);

export default Header;
