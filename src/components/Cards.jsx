import React from 'react';

// Cards récupère 2 props => image & title
function Cards({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt="" className="card__img" />
      <h2 className="card__title">{title}</h2>
    </div>
  )
};

export default Cards;