import React from 'react';

const Card = ({ participante, className = '', children }) => {
  return (
    <div className='card'>
      <h2> {participante} </h2>

      <div className={`card__options ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
