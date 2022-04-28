import React from 'react';
import pokeball from '../../assets/images/ball.svg';
import './index.css';

export default function PokeballLoading(): JSX.Element {
  return (
    <div className="pokeball-container">
      <img src={pokeball} alt="pokeball" className="pokeball-loading" />
    </div>
  );
}