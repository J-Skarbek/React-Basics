import heroImg from '../assets/hero-img.png';
import '../styles/heroSection.css';

function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" />
    </div>
  );
}

export default Hero;
