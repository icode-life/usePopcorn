import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
/* import './index.css';
import App from './App'; */

// Test component exist for the sake of showing that the StarRating has exported its state to be used in another place of the interface
const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="green" maxRating={10} onSetRating={setMovieRating} />
      <p>**some place else in the interface: this movie was rated {movieRating} stars**</p>
    </>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} defaultRating={3} />
    <StarRating maxRating={5} color="blue" size="30" messages={['terrible', 'bad', 'okay', 'good', 'awesome']} />
    <Test />
  </React.StrictMode>
);

