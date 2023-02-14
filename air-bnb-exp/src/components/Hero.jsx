import heroImg from '../assets/Group 77.svg';
import '../styles/heroSection.css';

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" className="hero-img"/>
    </div>
  );
}

export default Hero;
