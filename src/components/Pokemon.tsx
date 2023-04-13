import { PokeType } from "../types/types";
import Poke from "./Poke";

type HomeProps = {
  pokemons: PokeType[];
};

function PokemonList({ pokemons }: HomeProps) {
  const results = pokemons.map((poke) => <Poke key={poke.name} poke={poke} />);

  const content = results?.length ? (
    results
  ) : (
    <h1 className="m-5 text-4xl">No matching poke!</h1>
  );

  return (
    <main>
      {results?.length ? (
        <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {content}
        </div>
      ) : (
        <div className="flex items-center justify-center">{content}</div>
      )}
    </main>
  );
}

export default PokemonList;
