// import dummyImg from '../assets/dummyImg.jpg';
import memesData from '../memesData';

const memesArray = memesData.data.memes;
let url;

function getMemeImg() {
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  url = memesArray[randomNumber].url;
  console.log(url)
  return url
};  

function Meme(props) {
  return (
    <img src={props.url} alt="" className="w-9/12"/>
  );
}

export { Meme, getMemeImg };