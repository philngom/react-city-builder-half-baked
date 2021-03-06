import React from 'react';

export default function City(props) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img src={`waterfront-${props.waterfrontId}.jpeg`} />
      <img src={`castle-${props.castleId}.jpeg`} />
      <img src={`skyline-${props.skylineId}.jpeg`} />
    </div>
  );
}
