import mapMarker from '../assets/map-marker.svg';
import '../styles/location.css';

function Location(props) {
  return (
    <div className="location flex">
      <div className="featured-img-container">
        <img src={`src/assets/${props.image}`} className="picture" />
      </div>
      <div className="location-text-elements">
        <div className="location-details">
          <img src={mapMarker} className="map-marker" />
          <span className="country">{props.country}</span>
          <span className="google-link">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
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