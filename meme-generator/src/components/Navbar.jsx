import '../styles/Navbar.css';
import logo from '../assets/logo.svg';;

function Navbar() {
  return (
    <div className="navbar flex">
      <img src={logo} alt="" />
      <h1>Meme Generator</h1>
      <span>React Course - Project 3</span>
    </div>
  );
}

export default Navbar;