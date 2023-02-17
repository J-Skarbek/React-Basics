import '../styles/Display.css';
import dummyImg from '../assets/dummyImg.jpg';
import Meme from './Meme';
import memesData from '../memesData';

function Display() {
  return (
    <div className="display flex flex-col justify-center items-center relative">
      <Meme />
      <span className="meme-text font-karla font-black text-white text-6xl uppercase dummy-top-line absolute top-8">Shut Up</span>
      <span className="meme-text font-karla font-black text-white text-6xl uppercase dummy-bottom-line absolute bottom-8">And Take My Money</span>
    </div>
  );
}

export default Display;