import React from 'react';
import { useState } from 'react';

export const Tour = ({ item, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, img, name, info, price } = item;

  return (
    <div className="container">
      <img src={img} alt={name} />
      <div className="title">
        <h2>{name}</h2>
        <p className="price">{price}$</p>
      </div>
      <p className="info">
        {readMore ? info : info.substring(0, 200) + '...'}
        <button className="read-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'read less' : 'read more'}
        </button>
      </p>

      <button className="btn" onClick={() => removeTour(id)}>
        Remove tour
      </button>
    </div>
  );
};
