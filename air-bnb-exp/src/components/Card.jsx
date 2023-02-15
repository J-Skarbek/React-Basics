import star from '../assets/Star.svg';
import dot from '../assets/dot.svg';
import '../styles/card.css';

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  };
  return (
    <div className="card">
      {badgeText && 
      <div className="status"><p>{badgeText}</p></div>
      }
      <div className="featured-img">
        <img src={`src/assets/${props.img}`} alt="" />
      </div>
      <div className="details">
        <img src={star} alt="" className="star"/>
        <p>{props.rating}</p>
        <p className="gray-text">({props.numberOfReviews})</p>
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