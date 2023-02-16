import mapMarker from '../assets/map-marker.svg';
import '../styles/location.css';

function Location(props) {
  return (
    <div className="location flex pb-8 mb-8 border-b">
      <div className="featured-img-container mr-8">
        <img src={`src/assets/${props.image}`} className="picture object-fill" />
      </div>
      <div className="location-text-elements pr-12">
        <div className="location-details flex">
          <img src={mapMarker} className="map-marker" />
          <span className="country font-semibold tracking-wider text-2xl uppercase">{props.location}</span>
          <span className="google-link">
            <a href={props.googleMapsUrl} className="underline">View on Google Maps</a>
          </span>
        </div>
        <h2 className="name font-bold tracking-wide text-4xl mb-4">{props.title}</h2>
        <span className="dates font-semibold text-xl uppercase">{props.startDate} - {props.endDate}</span>
        <p className="body-text my-12">{props.description}</p>
      </div>
    </div>
  );
}

export default Location;