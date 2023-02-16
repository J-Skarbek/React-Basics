import globe from '../assets/globe-icon.svg';
import '../styles/header.css';

function Header() {
  return (
    <header className="header flex bg-red p-4 drop-shadow-md">
      <img src={globe} />
      <h1 className="drop-shadow-lg">my travel journal.</h1>
    </header>
  )
}

export default Header;