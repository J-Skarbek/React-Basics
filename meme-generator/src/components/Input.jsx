import '../styles/Input.css';
import { getMemeImg } from './Meme';

function Input() {  
  return (
    <div className="user-input flex items-center justify-center px-8 my-8">
      <form className="flex items-center justify-center flex-wrap gap-x-4 max-w-3xl">
        <input type="text" placeholder="Enter Top Line" className="min-w-fortyEight rounded-3xl"></input>
        <input type="text" placeholder="Enter Bottom Line" className="min-w-fortyEight rounded-3xl"></input>
        <button type="button" onClick={getMemeImg} className="text-white font-bold bg-gradient-to-r from-darkPurple to-lightPurple grow-2 my-4 rounded-3xl">Get New Meme Image</button>
      </form>
    </div>
  );
}

export { Input, getMemeImg };