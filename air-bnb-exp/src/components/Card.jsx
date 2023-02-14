import cardImg from '../assets/katie-zaferes.jpg';
import star from '../assets/Star.svg';
import dot from '../assets/dot.svg';
import '../styles/card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="status">
      <p>{props.status}</p>
      </div>
      <div className="featured-img">
        <img src={cardImg} alt="" />
      </div>
      <div className="details">
        <img src={star} alt="" className="star"/>
        <p>{props.rating}</p>
        <p className="gray-text">{props.numberOfReviews}</p>
        <img src={dot} alt="" className="dot" />
        <p className="gray-text">{props.country}</p>      
      </div>
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div>
        <p><b>From ${props.pricePerPerson} /</b> person</p>
      </div>
    </div>
  )
}

export default Card;