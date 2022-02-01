import React from 'react';
import Slogan from './Slogan.js';

export default function SloganList({ slogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {
        slogans.map((slogan, i) =>
          <Slogan key={slogan + i} slogan={ slogan }/>
        )
      }
    </section>
  );
}
