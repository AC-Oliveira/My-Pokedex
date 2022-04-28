import { createContext, useContext, useEffect, useState } from 'react';
import { PokedexContextData, PokedexProviderProps, PokemonData, PokemonDetails, PokemonInfo } from '../interfaces/interface';
import { apiPokemonData, apiPokemonInfo, apiSpecificPokemonInfo } from '../services/api';

// const ONE_SECOND = 1000;
const PokedexContext = createContext<PokedexContextData>({} as PokedexContextData);

export function PokedexProvider({ children }: PokedexProviderProps): JSX.Element {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [ pokemonsInfo, setPokemonsInfo ] = useState<PokemonInfo[]>([]);
  const [nextPokemonPage, setNextPokemonPage] = useState<string>('');
  const [currentPokemon, setCurrentPokemon] = useState<PokemonDetails>({} as PokemonDetails);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await apiPokemonData();
      const {results, next} = response.data;
      setNextPokemonPage(next);
      setPokemons(results);
      console.log('fetching pokemons');
      if (!localStorage.getItem('cUrReNt-pOkEmOn')) {
        const PokemonDetails = await apiSpecificPokemonInfo('1');
        console.log('Details',PokemonDetails);
        setCurrentPokemon(PokemonDetails);
      }
    }

    loadPokemons();
  }, []);


  useEffect(() => {
    const promises = [];
    setIsFetching(true);
      for (const pokemon of pokemons) {
        const isPokemonInInfo =  pokemonsInfo.some((pokeInfo) => pokeInfo.species.name === pokemon.name);
        if (!isPokemonInInfo) {
          promises.push(apiPokemonInfo(pokemon.url));
        }
        Promise.all(promises).then((values) => {
          const resolvedPromises = values.map(({ data }) => {
            const { height, id, moves, types, sprites, species, weight } = data;
            return { height, id, moves, types, sprites, species, weight };
          });
          return resolvedPromises;
        }).then((array) => {
          if (array.length % 50 === 0) {
            setPokemonsInfo((oldPokemonsInfo) => [...oldPokemonsInfo, ...array]);
            setIsFetching(false);
          }
        });
      }
  } , [pokemons]);

  const contextValue: PokedexContextData = {
    pokemons,
    setPokemons,
    nextPokemonPage,
    setNextPokemonPage,
    pokemonsInfo,
    setPokemonsInfo,
    currentPokemon,
    setCurrentPokemon,
    isFetching,
    setIsFetching,
  };

  return (
    <PokedexContext.Provider value={{...contextValue}}>
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedex(): PokedexContextData {
  const context = useContext(PokedexContext);
  return context;
}
