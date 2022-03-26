import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="shadow-xl rounded-m flex items-center mx-auto p-4 max-w-4xl">
      {children}
    </div>
  );
};

export default Card;
