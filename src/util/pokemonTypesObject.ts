import bug from '../assets/images/bug.svg';
import dark from '../assets/images/dark.svg';
import dragon from '../assets/images/dragon.svg';
import electric from '../assets/images/electric.svg';
import fairy from '../assets/images/fairy.svg';
import fighting from '../assets/images/fighting.svg';
import fire from '../assets/images/fire.svg';
import flying from '../assets/images/flying.svg';
import ghost from '../assets/images/ghost.svg';
import grass from '../assets/images/grass.svg';
import ground from '../assets/images/ground.svg';
import ice from '../assets/images/ice.svg';
import steel from '../assets/images/steel.svg';
import normal from '../assets/images/normal.svg';
import poison from '../assets/images/poison.svg';
import psychic from '../assets/images/psychic.svg';
import rock from '../assets/images/rock.svg';
import water from '../assets/images/water.svg';
import { PokemonStyleObject, PokemonTypesObject } from '../interfaces/interface';

export const pokemonTypesObject: PokemonTypesObject = {
  'bug': bug,
  'dark': dark,
  'dragon': dragon,
  'electric': electric,
  'fairy': fairy,
  'fighting': fighting,
  'fire': fire,
  'flying': flying,
  'ghost': ghost,
  'grass': grass,
  'ground': ground,
  'ice': ice,
  'steel': steel,
  'normal': normal,
  'poison': poison,
  'psychic': psychic,
  'rock': rock,
  'water': water
};

export const pokemonStylesObject: PokemonStyleObject = {
  grass: {
    pokemonCard: {
      border: '3px solid #466a43',
      backgroundImage: 'linear-gradient(#ffffff, #63bb5b)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #63bb5b)',
    }
  },
  fire: {
    pokemonCard: {
      border: '3px solid #ff9c54',
      backgroundImage: 'linear-gradient(#ffffff, #fbbf91)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #fbbf91)',
    }
  },
  water: {
    pokemonCard: {
      border: '3px solid #334d68',
      backgroundImage: 'linear-gradient(#ffffff, #477fba)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #477fba)',
    }
  },
  bug: {
    pokemonCard: {
      border: '3px solid #93c32c',
      backgroundImage: 'linear-gradient(#ffffff, #456b41)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #456b41)',
    }
  },
  dark: {
    pokemonCard: {
      border: '3px solid #5c5c5c',
      backgroundImage: 'linear-gradient(#ffffff, #5c5c5c)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #5c5c5c)',
    }
  },
  dragon: {
    pokemonCard: {
      border: '3px solid #7b6fcf',
      backgroundImage: 'linear-gradient(#ffffff, #7b6fcf)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #7b6fcf)',
    }
  },
  electric: {
    pokemonCard: {
      border: '3px solid #f7d02c',
      backgroundImage: 'linear-gradient(#ffffff, #f7d02c)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #f7d02c)',
    }
  },
  fairy: {
    pokemonCard: {
      border: '3px solid #f4b1f4',
      backgroundImage: 'linear-gradient(#ffffff, #f4b1f4)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #f4b1f4)',
    }
  },
  fighting: {
    pokemonCard: {
      border: '3px solid #d56723',
      backgroundImage: 'linear-gradient(#ffffff, #d56723)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #d56723)',
    }
  },
  normal: {
    pokemonCard: {
      border: '3px solid #a8a8a8',
      backgroundImage: 'linear-gradient(#ffffff, #a8a8a8)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #a8a8a8)',
    }
  },
  poison: {
    pokemonCard: {
      border: '3px solid #a33ea1',
      backgroundImage: 'linear-gradient(#ffffff, #a33ea1)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #a33ea1)',
    }
  },
  flying: {
    pokemonCard: {
      border: '3px solid #3d98b8',
      backgroundImage: 'linear-gradient(#ffffff, #3d98b8)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #3d98b8)',
    }
  },
  psychic: {
    pokemonCard: {
      border: '3px solid #f366b9',
      backgroundImage: 'linear-gradient(#ffffff, #f366b9)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #f366b9)',
    }
  },
  rock: {
    pokemonCard: {
      border: '3px solid #a38c21',
      backgroundImage: 'linear-gradient(#ffffff, #a38c21)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #a38c21)',
    }
  },
  steel: {
    pokemonCard: {
      border: '3px solid #8a8a8a',
      backgroundImage: 'linear-gradient(#ffffff, #8a8a8a)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #8a8a8a)',
    }
  },
  ground: {
    pokemonCard: {
      border: '3px solid #d1c07b',
      backgroundImage: 'linear-gradient(#ffffff, #d1c07b)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #d1c07b)',
    }
  },
  ice: {
    pokemonCard: {
      border: '3px solid #a3d1ff',
      backgroundImage: 'linear-gradient(#ffffff, #a3d1ff)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #a3d1ff)',
    }
  },
  ghost: {
    pokemonCard: {
      border: '3px solid #7b62a3',
      backgroundImage: 'linear-gradient(#ffffff, #7b62a3)',
    },
    pokemonImg: {
      backgroundImage: 'linear-gradient(#ffffff, #7b62a3)',
    }
  },
};

export const pokemonIcon: (type: keyof PokemonTypesObject) => string = (type) => {
  return pokemonTypesObject[type];
};