import logo from '../assets/logo.svg';;

function Footer() {
  return (
    <div className="navbar flex items-center justify-between bg-gradient-to-r from-darkPurple to-lightPurple px-8 py-4 mt-8">
      <div className="logo-and-title flex items-center">
      <img src={logo} alt="Meme Generator Logo" className="w-12 mr-4" />
      <h1 className="font-karla font-bold text-white">Meme Generator</h1>
      </div>
      <span className="font-karla font-bold text-white">React Course - Project 3</span>
    </div>
  );
}

export default Footer;