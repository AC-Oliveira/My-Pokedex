import axios from 'axios';
import { PokemonInfoService, PokemonService } from '../interfaces/interface';

const defaultURL = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';

export const apiPokemonData: () => Promise<PokemonService> = async(url = defaultURL) => axios.get(url);

export const apiPokemonInfo: (url: string) => Promise<PokemonInfoService> = async(url) => axios.get(url);

export const apiPokemonNextData: (url: string) => Promise<PokemonService> = async(url) => axios.get(url);
