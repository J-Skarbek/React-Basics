import '../styles/location.css';

function Location() {
  return (
    <div className="location flex">
      <div className="featured-img-container">
        <img className="picture" />
      </div>
      <div className="location-text-elements">
        <div className="location-details">
          <img className="map-marker" />
          <span className="country"></span>
          <span className="google-link"></span>
        </div>
        <h2 className="name">Mount Fiji</h2>
        <span className="dates"></span>
        <p className="body-text"></p>
      </div>
    </div>
  );
}

export default Location;