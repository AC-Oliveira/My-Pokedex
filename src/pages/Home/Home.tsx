import React from 'react';
import PokeballLoading from '../../components/PokeballLoading/PokeballLoading';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { usePokedex } from '../../hooks/usePokedex';
import { apiPokemonNextData } from '../../services/api';
import './Home.css';

export default function Home(): JSX.Element {
  const {pokemonsInfo, setPokemons, nextPokemonPage, setNextPokemonPage, isFetching, setIsFetching } = usePokedex();
  // eslint-disable-next-line
  let time: any = null;

  window.onscroll = () => {
    clearTimeout(time);

    if (!isFetching) {
      time = setTimeout(() => {
        const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
        if (scrollHeight - scrollTop - 100 <= clientHeight) {
          setIsFetching(true);
          const test = async () => {
            const {data: {results, next}} = await apiPokemonNextData(nextPokemonPage);
            setPokemons((oldPokemons) => {
              return [...oldPokemons, ...results];
            });
            setNextPokemonPage(next);
          };
          test();
        }
      }, 100);
    }
  };

  return (
      <>
        <div className="div-cards">
          {pokemonsInfo.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
        {isFetching && <div><PokeballLoading /></div>}
      </>
  );
}