import React from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { usePokedex } from '../../hooks/usePokedex';
import { apiPokemonData, apiPokemonInfo, apiPokemonNextData } from '../../services/api';
import './Home.css';

export default function Home(): JSX.Element {
  const {pokemonsInfo, setPokemons, nextPokemonPage, setNextPokemonPage } = usePokedex();

  return (
    <>
      <div className="div-cards">
        {pokemonsInfo.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <button onClick={() => {
        const test = async () => {
          const {data: {results, next}} = await apiPokemonNextData(nextPokemonPage);
          setPokemons((oldPokemons) => {
            return [...oldPokemons, ...results];
          });
          setNextPokemonPage(next);
        };
        test();
      }
      }>Teste</button>
    </>
  );
}