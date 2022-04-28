import React from 'react';
import pokeball from '../../assets/images/ball.svg';
import './PokeballLoading.css';

export default function PokeballLoading(): JSX.Element {
  return (
    <div className="pokeball-loading">
      <img src={pokeball} alt="pokeball" className="pokeball-loading" />
    </div>
  );
}