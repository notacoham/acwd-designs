import React from 'react';

import { whatCards } from '../data'
import WhatCard from './WhatCard';
import WaveBottom from './WaveBottom';

const WhatWeDo = () => {
  return (
    <div className="what-center">
      <div className="what-content">
        <h1 className="what-title">What We Do</h1>
        <p className="what-body">
          At ACWD Designs, we work with small businesses to develop websites
          here in Millcreek, Utah. We write each line of code by hand to ensure
          the best performance and bring more customers to your storefront. We
          take care of the hosting and manage the edits so you have more time to
          focus on what really matters.
        </p>
      </div>
      <div className="what-list">
        {whatCards.map((singleCard) => {
          return <WhatCard key={singleCard.id} {...singleCard}/>
        })}
      </div>
      <WaveBottom />
    </div>
  );
};

export default WhatWeDo;
