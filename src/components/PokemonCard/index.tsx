import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PokemonInfo, PokemonStyleObject, PokemonTypesObject } from '../../interfaces/interface';
import { apiSpecificPokemonInfo } from '../../services/api';
import { formatName } from '../../util/format';
import { pokemonIcon, pokemonStylesObject } from '../../util/pokemonTypesObject';
import './index.css';

export default function PokemonCard({ pokemon }: { pokemon: PokemonInfo }): JSX.Element {
  const [currentType, setCurrentType] = React.useState<string>('grass' );

  const {species: { name }, types } = pokemon;
  const formatedName = formatName(name);
  const typeName = types[0].type.name;

  useEffect(() => {
    if (typeName !== 'grass') setCurrentType(typeName);
  } , [currentType]);

  const type = currentType as keyof PokemonStyleObject;


  return (
    <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'white' }} onClick={
      async () => {
        const result = await apiSpecificPokemonInfo(pokemon.id);
        localStorage.setItem('cUrReNt-pOkEmOn', JSON.stringify(result));
      }
    }>
      <div key={pokemon.id} className="pokemon-card" style={{...pokemonStylesObject[type].pokemonCard}}>
        <div className="pokemon-header">
          <h1 className="pokemon-name">{formatedName}</h1>
          <div>
            {types.map((type, index) => {
              const currentType = type.type.name as keyof PokemonTypesObject;
              const icon = pokemonIcon(currentType);
              const key = `${pokemon.id}-${index}-${currentType}`;
              return <img src={icon} alt={`A pokemon type ${currentType} icon`} key={key} className="type-icon" />;})
            }
          </div>
        </div>
        <div className="card-image">
          <img src={pokemon.sprites.front_default} alt={pokemon.species.name} className="pokemon-img" style={{...pokemonStylesObject[type].pokemonImg}} />
        </div>
        <div className="pokemon-text">
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
    </Link>
  );
}