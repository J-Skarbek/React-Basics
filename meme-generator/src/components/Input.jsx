import '../styles/Input.css';

function Input() {
  return (
    <div className="user-input flex">
      <form>
        <input type="text" placeholder="Enter Top Line"></input>
        <input type="text" placeholder="Enter Bottom Line"></input>
        <button type="button">Get New Meme Image</button>
      </form>
    </div>
  );
}

export default Input;