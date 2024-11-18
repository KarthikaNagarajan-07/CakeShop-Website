import React from 'react';
import './FlavorsComponent.css';

const FlavorsComponent = () => {
  const flavors = [
    'Chocolate',
    'Fruits',
    'Red Velvet',
    'Strawberry',
    'Blackforest',
    'Pineapple',
    'Butterscotch',
    'Kit Kat',
  ];

  return (
    <div className="flavors-container">
      <h2 className='h2'>Experience Flavours</h2>
      <div className="flavors-list">
        {flavors.map((flavor, index) => (
          <button key={index} className="flavor-button">
            {flavor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlavorsComponent;
