import '../styles/Display.css';
import dummyImg from '../assets/dummyImg.jpg';

function Display() {
  return (
    <div>
      <img src={dummyImg} alt="" />
      <span className="dummy-top-line">Shut Up</span>
      <span className="dummy-bottom-line">And Take My Money</span>
    </div>
  );
}

export default Display;