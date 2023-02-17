import '../styles/Display.css';
import dummyImg from '../assets/dummyImg.jpg';

function Display() {
  function imgFocus() {
    console.log('The mouse went over the image.')
  }
  return (
    <div className="display flex flex-col justify-center items-center relative">
      <img src={dummyImg} onMouseOver={imgFocus} alt="" className="w-9/12"/>
      <span className="meme-text font-karla font-black text-white text-6xl uppercase dummy-top-line absolute top-8">Shut Up</span>
      <span className="meme-text font-karla font-black text-white text-6xl uppercase dummy-bottom-line absolute bottom-8">And Take My Money</span>
    </div>
  );
}

export default Display;