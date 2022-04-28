import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePokedex } from '../../hooks/usePokedex';
import { PokeId } from '../../interfaces/interface';
import { apiSpecificPokemonInfo } from '../../services/api';
import { formatName, formatTypes } from '../../util/format';
import { pokemonStylesObject } from '../../util/pokemonTypesObject';
import './index.css';


export default function PokemonDetails(): JSX.Element {
  const { id } = useParams<PokeId>();
  let { currentPokemon } = usePokedex();
  const { setCurrentPokemon } = usePokedex();
  if (!Object.keys(currentPokemon).length) {
    currentPokemon = {...JSON.parse(localStorage.getItem('cUrReNt-pOkEmOn') || '' )};
  }
  const jpnName = currentPokemon.names.find((names) => names.language.name === 'ja-Hrkt')?.name;
  const type = currentPokemon.types[0].type.name as keyof typeof pokemonStylesObject;

  useEffect(() => {
    const renderPokemon = async () => {
      const PokemonDetails = await apiSpecificPokemonInfo(id);
      setCurrentPokemon(PokemonDetails);
    };
    renderPokemon();
  } , [id]);

  const imageSRC: (id: number | string ) => string = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <div className="divdiv" style={pokemonStylesObject[type].pokemonCard}>
      <h1>{formatName(currentPokemon.species.name)}</h1>
      <h3>{jpnName}</h3>
      <img src={imageSRC(id)} alt="A pokemon Image" className="details-image" />
      <h5 className="details-titles">{currentPokemon.generation.name}</h5>
      <div className="details-titles">
        <h3>Description:</h3>
        <p>{currentPokemon.flavor_text_entries[0].flavor_text}</p>
      </div>
      <div className="details-titles">
        <h4>Evolutions:</h4>
        <div>{currentPokemon.evolutionTree.map(
          (evolution, index) => {
          const evolutionId = evolution.url.split('/')[6];
          return (
            <Link to={`/pokemon/${evolutionId}`}>
              < img key={`${evolution.name}-${index}`} src={imageSRC(evolutionId)} className="evolution-image" />
            </Link>
          );
          })
        }</div>
      </div>
      <div className="details-titles">
        <h4>Type:</h4>
        <p>{formatTypes(currentPokemon.types)}</p>
      </div>
      <div className="details-titles">
        <h4>Abilities:</h4>
        {currentPokemon.abilities.map(
          (ability, index) => <p key={`${ability.ability.name}-${index}`}>
            <span>{ability.is_hidden && 'Hidden: '}</span>
            {ability.ability.name}
            </p>)
        }
      </div>
      <div className="details-titles" >
        <h4>Stats:</h4>
        <p>Height: {currentPokemon.height}</p>
        <p>Weight: {currentPokemon.weight}</p>
      </div>
    </div>
  );
}