// import heroImg from '../assets/hero-img.png';
import newHero from '../assets/Group 77.svg';
import '../styles/heroSection.css';

function Hero() {
  return (
    <div className="hero">
      <img src={newHero} alt="" className="hero-img"/>
    </div>
  );
}

export default Hero;
