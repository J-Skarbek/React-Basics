
// import ReactLogo from '../react-logo.png';
import Logo from '../logo.svg';
import '../NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <img src={Logo} width = "100px" alt=""/>
      <ul className="nav-menu">
        <li>About</li>
        <li>Contact</li>
        <li>Products</li>
        <li>Other</li>
      </ul>
    </div>
  );
}

export default NavBar;
