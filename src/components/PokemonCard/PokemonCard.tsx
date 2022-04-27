import React from 'react';
import { PokemonInfo } from '../../interfaces/interface';
import './PokemonCard.css';

export default function PokemonCard({ pokemon }: { pokemon: PokemonInfo }): JSX.Element {
  const {species: { name }, types } = pokemon;
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1);
  const pokemonTypes = types.map(({type: { name }}) => name.charAt(0).toUpperCase() + name.slice(1));
  const formatedTypes = pokemonTypes.join('/');

  return (
    <div key={pokemon.id} className="pokemon-card">
      <div className="pokemon-header">
        <h1 className="pokemon-name">{formatedName}</h1>
        <p>{formatedTypes}</p>
      </div>
      
      <img src={pokemon.sprites.front_default} alt={pokemon.species.name} className="pokemon-img" />
      <div className="pokemon-text">
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    </div>
  );
}