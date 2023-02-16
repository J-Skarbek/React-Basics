import data from '../data';
import Location from './location.jsx';
import '../styles/content.css';

function Content() {
  const locations = data.map(location => {
    return <Location 
    key={location.id}
    {...location}
    />;
  });
  return (
    <div className="content flex">
      {locations}
    </div>
  );
}

export default Content;