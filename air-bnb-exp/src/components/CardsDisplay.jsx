import Card from './Card';
import data from '../data';
import '../styles/cardDisplay.css';

function CardsDisplay() {
  const cardElements = data.map(element => {
    return <Card
      key={element.id}
      title={element.title} 
      status={element.status}
      img={element.coverImg}
      rating={element.stats.rating}
      numberOfReviews={element.stats.reviewCount}
      location={element.location}
      price={element.price}
    />
  });
  return (
    <div className="cards-display">
      {cardElements}
    </div>
  );
}

export default CardsDisplay;

