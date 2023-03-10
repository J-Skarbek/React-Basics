import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from "./components/Header";
// import Arms from "./components/stateAndProps";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Hello, world!</h1>;
  </React.StrictMode>
);

class TestTest extends React.Component {
  render() {
    return (
      <div>
        <p>Testing some shit!</p>
        <Header />
      </div>
    );
  };
}

const test = ReactDOM.createRoot(document.getElementById('test'));
test.render(<TestTest />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
