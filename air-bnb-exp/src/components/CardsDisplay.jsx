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
      country={element.country}
      price={element.price}
    />
  });
  return (
    <section className="cards-display">
      {cardElements}
    </section>
  );
}

export default CardsDisplay;

