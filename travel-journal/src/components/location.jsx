import mapMarker from '../assets/map-marker.svg';
import '../styles/location.css';

function Location(props) {
  return (
    <div className="location flex">
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
        <h2 className="name">{props.title}</h2>
        <span className="dates">{props.startDate} {props.endDate}</span>
        <p className="body-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Location;