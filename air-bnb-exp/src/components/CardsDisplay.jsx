import Card from './Card';
import mtnBiking from '../assets/group-mtn-biking.jpg';
import photogrpahy from '../assets/learn-wedding-photography.jpg';
import zeferes  from '../assets/katie-zaferes.jpg';
import '../styles/cardDisplay.css';

function CardsDisplay() {
  return (
    <div className="cards-display">
       <Card
        title="Life lessons with Katie Zaferes"
        img={zeferes}
        status="SOLD OUT"
        rating="5.0"
        numberOfReviews="6"
        country="USA"
        pricePerPerson="136"
      />
       <Card 
        title="Learn Wedding Photography"
        img={photogrpahy}
        status="ONLINE"
        rating="5.0"
        numberOfReviews="30"
        country="USA"
        pricePerPerson="125"
       />
       <Card 
        title="Group Mountain Biking"
        img={mtnBiking}
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

