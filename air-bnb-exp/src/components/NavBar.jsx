import airbnbLogo from '../assets/airbnb-logo.svg';
import '../styles/navbar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <img src={airbnbLogo} alt="" className="logo" />


    </div>
  )
}

export default NavBar;