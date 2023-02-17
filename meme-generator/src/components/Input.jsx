import '../styles/Input.css';

function Input() {
  return (
    <div className="user-input flex items-center justify-center px-8 my-8">
      <form className="flex items-center justify-center flex-wrap gap-x-4 max-w-3xl">
        <input type="text" placeholder="Enter Top Line" className="min-w-fortyEight"></input>
        <input type="text" placeholder="Enter Bottom Line" className="min-w-fortyEight"></input>
        <button type="button" className="text-white bg-gradient-to-r from-darkPurple to-lightPurple grow-2 my-4">Get New Meme Image</button>
      </form>
    </div>
  );
}

export default Input;