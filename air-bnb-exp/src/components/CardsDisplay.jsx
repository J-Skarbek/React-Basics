import Card from './Card';
import data from '../data';
import '../styles/cardDisplay.css';

function CardsDisplay() {
  const cardElements = data.map(element => {
    return <Card
      key={element.id}
      {...element}
    />
  });
  return (
    <section className="cards-display">
      {cardElements}
    </section>
  );
}

export default CardsDisplay;

