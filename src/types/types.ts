export type PokeType = {
  name: string;
  url: string;
};

export type pokemonFetchType = {
  count: number;
  next: string;
  previous: string;
  results: PokeType[];
};

export type detailedPokeType = {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: typesObject[];
};

export type typesObject = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
