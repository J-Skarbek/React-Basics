import Card from './Card';
import '../styles/cardDisplay.css';

function CardsDisplay() {
  return (
    <div className="cards-display">
       <Card
        title="Life lessons with Katie Zaferes"
        img="../assets/katie-zaferes.jpg"
        status="SOLD OUT"
        rating="5.0"
        numberOfReviews="6"
        country="USA"
        pricePerPerson="136"
      />
       <Card 
        title="Learn Wedding Photography"
        img="../assets/learn-wedding-photography.jpg"
        status="ONLINE"
        rating="5.0"
        numberOfReviews="30"
        country="USA"
        pricePerPerson="125"
       />
       <Card 
        title="Group Mountain Biking"
        img="../assets/group-mtn-biking.jpg"
        status="Online"
        rating="4.8"
        numberOfReviews="2"
        country="USA"
        pricePerPerson="50"
       />
    </div>
  );
}

export default CardsDisplay;

