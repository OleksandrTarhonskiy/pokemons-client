import React from 'react';

import pokeball from 'assets/images/pokeball.png';

const Loading: React.FC = () => {
  return (
    <div className="loading-layout">
      <img src={pokeball} className="spinner" alt="spinner" />
    </div>
  );
};

export default Loading;