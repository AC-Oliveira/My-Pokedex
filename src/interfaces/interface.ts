import { Dispatch, ReactNode } from 'react';

export interface PokemonService {
  data: {
    results: PokemonData[];
    next: string;
  };
}

export interface PokemonInfoService {
  data: {
    height: number,
    id: number,
    moves: {move: string, url: string}[],
    types: {slot: number ,type: { name: string, url: string}}[],
    sprites: {
      front_default: string,
    },
    species: {
      name: string
    },
    weight: number
  },
}

export interface PokedexProviderProps {
  children: ReactNode;
}

export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonInfo {
  height: number;
  id: number;
  moves: {move: string, url: string}[];
  types: {slot: number ,type: { name: string, url: string}}[];
  sprites: {
    front_default: string,
  };
  species: {
    name: string
  };
  weight: number;
}

export interface PokedexContextData {
  pokemons: PokemonData[];
  setPokemons: Dispatch<React.SetStateAction<PokemonData[]>>;
  nextPokemonPage: string;
  setNextPokemonPage: Dispatch<React.SetStateAction<string>>;
  pokemonsInfo: PokemonInfo[];
  setPokemonsInfo: Dispatch<React.SetStateAction<PokemonInfo[]>>; 
}
