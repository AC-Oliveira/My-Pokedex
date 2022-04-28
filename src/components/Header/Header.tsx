import React from 'react';
import pokelogo from '../../assets/images/pokelogo.png';
import pokeball from '../../assets/images/pokeball.png';
import pikachu from '../../assets/images/pikachu.png';
import pikachuM from '../../assets/images/pikachu-inverted.png';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <nav className="navbar">
      <img className="logo" src={pokelogo} alt="Pokemon Series Logo" />
      <div className="mobile-nav navbar-item">
        <img src={pikachu} alt="Pikachu" className="pikachu" />
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>Pokedex</h1>
        </Link>
        <img src={pikachuM} alt="Pikachu" className="pikachu" />
      </div>
      <img src={pokeball} alt="Pokeball" className="pokeball" />
    </nav>
  );
}
