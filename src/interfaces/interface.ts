/* eslint-disable semi */
import { Dispatch, ReactNode } from 'react';

export interface PokemonService {
  data: {
    results: PokemonData[],
    next: string,
  };
}

export interface PokemonTypesObject {
  readonly bug: string,
  readonly dark: string,
  readonly dragon: string,
  readonly electric: string,
  readonly fairy: string,
  readonly fighting: string,
  readonly fire: string,
  readonly flying: string,
  readonly ghost: string,
  readonly grass: string,
  readonly ground: string,
  readonly ice: string,
  readonly steel: string,
  readonly normal: string,
  readonly poison: string,
  readonly psychic: string,
  readonly rock: string,
  readonly water: string
}

export interface PokemonType {
  name:  string | keyof PokemonTypesObject;
  url: string;
}

export interface PokemonInfo {
  height: number;
  id: number;
  moves: {move: PokemonData, url: string}[];
  types: {slot: number ,type: PokemonType}[];
  sprites: {
    front_default: string,
  };
  species: {
    name: string
  };
  weight: number;
}

export interface PokemonInfoService {
  data: PokemonInfo;
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
  moves: {move: PokemonData, url: string}[];
  types: {slot: number ,type: { name: string | keyof PokemonTypesObject, url: string}}[];
  sprites: {
    front_default: string,
  };
  species: {
    name: string,
  };
  weight: number;
}

export interface PokeId {
  id: string;
}

export interface PokedexContextData {
  pokemons: PokemonData[];
  setPokemons: Dispatch<React.SetStateAction<PokemonData[]>>;
  nextPokemonPage: string;
  setNextPokemonPage: Dispatch<React.SetStateAction<string>>;
  pokemonsInfo: PokemonInfo[];
  setPokemonsInfo: Dispatch<React.SetStateAction<PokemonInfo[]>>;
  currentPokemon: PokemonDetails;
  setCurrentPokemon: Dispatch<React.SetStateAction<PokemonDetails>>;
  isFetching: boolean;
  setIsFetching: Dispatch<React.SetStateAction<boolean>>;
}

export interface NameInterface {
  language: {
    name: string,
    url: string,
  };
  name: string;
}

export default interface PokemonAbilities {
  ability: PokemonData;
  is_hidden: boolean;
}


export interface PokemonDetails extends PokemonInfo {
  abilities: PokemonAbilities[];
  names: NameInterface[];
  generation: PokemonData;
  evolutionTree: PokemonData[];
  flavor_text_entries: {
    flavor_text: string,
  }[];
}

export interface PokemonDetailsService {
  data: PokemonDetails
}

export interface EvolutionChain {
  evolves_to: EvolutionChain[]
  species: PokemonData
}

export interface Recursive {
  (chain: EvolutionChain, evolveTree: string[]) : Recursive
}

export type FormatName = (name: string) => string;


export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export type FormatType = (types: Types[]) => string;

export interface PokemonStyle {
  pokemonCard: {
    border: string;
    backgroundImage: string;
  },
  pokemonImg: {
    backgroundImage: string;
  },
}

export interface PokemonStyleObject {
  grass: PokemonStyle,
  fire: PokemonStyle,
  water: PokemonStyle,
  bug: PokemonStyle,
  electric: PokemonStyle,
  normal: PokemonStyle,
  poison: PokemonStyle,
  flying: PokemonStyle,
  fighting: PokemonStyle,
  psychic: PokemonStyle,
  rock: PokemonStyle,
  ground: PokemonStyle,
  ice: PokemonStyle,
  dragon: PokemonStyle,
  ghost: PokemonStyle,
  steel: PokemonStyle,
  fairy: PokemonStyle,
  dark: PokemonStyle,
}