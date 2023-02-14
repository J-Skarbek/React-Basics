import cardImg from '../assets/kzaferes.jpg';
import star from '../assets/Star.svg';
import dot from '../assets/dot.svg';
import '../styles/card.css';

function Card() {
  return (
    <div className="card">
      <p>SOLD OUT</p>
      <div className="featured-img">
        <img src={cardImg} alt="" />
      </div>
      <div className="details">
        <img src={star} alt="" />
        <p>5.0</p>
        <p>(6)</p>
        <img src={dot} alt="" />
        <p>USA</p>      
      </div>
      <div className="title">
        <p>Life Lessons with Katie Zaferes</p>
      </div>
      <div>
        <p><b>From $136 /</b> person</p>
      </div>
    </div>
  )
}

export default Card;