import axios from 'axios';
import { EvolutionChain, PokemonData, PokemonDetails, PokemonInfoService, PokemonService, Recursive } from '../interfaces/interface';

const defaultURL = 'https://pokeapi.co/api/v2/pokemon';

export const apiPokemonData: () => Promise<PokemonService> = async() => axios.get(`${defaultURL}?limit=50&offset=0`);

export const apiPokemonInfo: (url: string) => Promise<PokemonInfoService> = async(url) => axios.get(url);

export const apiPokemonNextData: (url: string) => Promise<PokemonService> = async(url) => axios.get(url);

function findEvolveTree(chain: EvolutionChain, evolveTree : PokemonData[] = []): Recursive | PokemonData[] {
  if (!chain.evolves_to.length) {
    return [...evolveTree, chain.species];
  }
  evolveTree.push(chain.species);
  return findEvolveTree(chain.evolves_to[0], evolveTree);
}

export const apiSpecificPokemonInfo: (id: string | number) => Promise<PokemonDetails> = async (id) => {
  const { data: pokemonInfo} = await axios.get(`${defaultURL}/${id}`);
  const {data: pokeSpecieInfo} = await axios.get(`${defaultURL}-species/${id}`);

  console.log(pokemonInfo);
  console.log(pokeSpecieInfo);

  const evolution_chain = pokeSpecieInfo.evolution_chain.url;
  const {data : { chain }} = await axios.get(evolution_chain);
  const evolutionTree = findEvolveTree(chain);

  return {...pokemonInfo, ...pokeSpecieInfo, evolutionTree};
};
