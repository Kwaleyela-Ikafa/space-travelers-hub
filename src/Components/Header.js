import { NavLink } from 'react-router-dom';
import logo from '../assets/space-traveler-logo.png';

const Header = () => (
  <>
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <NavLink
          to="/Rockets"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/Dragons"
        >
          Dragons
        </NavLink>
        <NavLink
          to="/Missions"
        >
          Missions
        </NavLink>
        <NavLink
          to="/MyProfile"
        >
          MyProfile
        </NavLink>
      </nav>
    </header>
    <div className="Line" />

  </>
);

export default Header;
