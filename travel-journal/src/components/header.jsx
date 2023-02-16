import globe from '../assets/globe-icon.svg';
import '../styles/header.css';

function Header() {
  return (
    <header className="header flex bg-red">
      <img src={globe} />
      <h1>my travel journal.</h1>
    </header>
  )
}

export default Header;