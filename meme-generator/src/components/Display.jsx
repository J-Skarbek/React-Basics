import '../styles/Display.css';
import memesData from '../memesData';
import React from 'react';

function Display() {
  // const [memeImg, setMemeImg] = React.useState('https://i.imgflip.com/30b1gx.jpg');

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleTextChange(event) {
    const {name} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      topText: '',
      bottomText: '',
    }))
  }

  function updateText() {
    setMeme(prevMeme => ({
      ...prevMeme,
      topText: '',
      bottomText: '',
    }))
  }
  
  return (
    <main className="min-h-full">
      <div className="user-input flex items-center justify-center px-8 my-8">
        <div className="flex items-center justify-center flex-wrap gap-x-4 max-w-3xl">
          <input type="text" name="topText" placeholder="Enter Top Line" className="min-w-fortyEight rounded-3xl"></input>
          <input type="text" name="bottomText" placeholder="Enter Bottom Line" className="min-w-fortyEight rounded-3xl"></input>
          <button type="button" onClick={getMeme} className="text-white font-bold bg-gradient-to-r from-darkPurple to-lightPurple grow-2 my-4 rounded-3xl">Get New Meme Image</button>
        </div>
      </div>
      <div className="display flex flex-col justify-center items-center relative h-5/6 min-h-[500px]">
      <img src={meme.randomImage} alt="" className="w-9/12 h-memeHeight max-h-memeMaxHeight object-contain"/>
        <span className="meme-text font-karla font-black text-white text-6xl uppercase dummy-top-line absolute top-8">Shut Up</span>
        <span className="meme-text font-karla font-black text-white text-6xl uppercase dummy-bottom-line absolute bottom-8">And Take My Money</span>
      </div>
    </main>
  );
}

export default Display;