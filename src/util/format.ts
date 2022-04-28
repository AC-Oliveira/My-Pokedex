import { FormatName, FormatType } from '../interfaces/interface';

export const formatName: FormatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

export const formatTypes: FormatType = (types) => {
  const pokeTypes = types.map(({type: { name }}) => name.charAt(0).toUpperCase() + name.slice(1));
  const pokeTypesFormated = pokeTypes.join('/');
  return pokeTypesFormated;
};
