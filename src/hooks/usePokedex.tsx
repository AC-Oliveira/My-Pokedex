import { createContext, useContext, useEffect, useState } from 'react';
import { PokedexContextData, PokedexProviderProps, PokemonData, PokemonInfo } from '../interfaces/interface';
import { apiPokemonData, apiPokemonInfo } from '../services/api';

// const ONE_SECOND = 1000;
const PokedexContext = createContext<PokedexContextData>({} as PokedexContextData);

export function PokedexProvider({ children }: PokedexProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [ pokemonsInfo, setPokemonsInfo ] = useState<PokemonInfo[]>([]);
  const [nextPokemonPage, setNextPokemonPage] = useState<string>('');

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await apiPokemonData();
      const {results, next} = response.data;
      setNextPokemonPage(next);
      setPokemons(results);
    }

    loadPokemons();
  }, []);

  useEffect(() => {
    const loadPokemonInfo = async (): Promise<void> => {
      for (const pokemon of pokemons) {
        pokemon.name;
        const isPokemonInInfo =  pokemonsInfo.some((pokeInfo) => pokeInfo.species.name === pokemon.name);
        if (!isPokemonInInfo) {
          const { data } = await apiPokemonInfo(pokemon.url);
          const { height, id, moves, types, sprites, species, weight } = data;
          setPokemonsInfo((oldPokemonsInfo) => [...oldPokemonsInfo, { height, id, moves, types, sprites, species, weight }]);
        }
      }
    };
    loadPokemonInfo();
  } , [pokemons]);

  return (
    <PokedexContext.Provider
      value={{ pokemons, setPokemons, nextPokemonPage, setNextPokemonPage,  pokemonsInfo, setPokemonsInfo }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedex(): PokedexContextData {
  const context = useContext(PokedexContext);

  return context;
}
