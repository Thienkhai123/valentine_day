import React from 'react';

const FallingHearts = () => {
  return (
    <div>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className='heart'
          style={{
            // eslint-disable-next-line react-hooks/purity
            left: `${Math.random() * 100}vw`,
            // eslint-disable-next-line react-hooks/purity
            animationDelay: `${Math.random() * 5}s`,
            // eslint-disable-next-line react-hooks/purity
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingHearts;
