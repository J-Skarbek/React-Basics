import cardImg from '../assets/katie-zaferes.jpg';
import star from '../assets/Star.svg';
import dot from '../assets/dot.svg';
import '../styles/card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="status">
      <p>SOLD OUT</p>
      </div>
      <div className="featured-img">
        <img src={cardImg} alt="" />
      </div>
      <div className="details">
        <img src={star} alt="" className="star"/>
        <p>5.0</p>
        <p className="gray-text">(6)</p>
        <img src={dot} alt="" className="dot" />
        <p className="gray-text">USA</p>      
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