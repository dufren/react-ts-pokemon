import React, { useEffect, useState } from "react";
import { useGetPokemonQuery } from "../app/api/apiSlice";
import { LoadingPage } from "../components/Loading";
import Poke from "../components/Poke";
import { PokeType } from "../types/types";
import Search from "../components/Search";

const Home = () => {
  const [pokemons, setPokemons] = useState<PokeType[]>([]);

  const { data, isLoading, isFetching, isSuccess } =
    useGetPokemonQuery(undefined);

  useEffect(() => {
    data && setPokemons(data.results);
  }, [isSuccess]);

  if (isLoading || isFetching) return <LoadingPage />;

  if (!data) return <div>Something went wrong.</div>;

  const results = pokemons.map((poke) => <Poke key={poke.name} poke={poke} />);

  const content = results?.length && results;

  const emptyContent = !results?.length && (
    <h1 className="text-4xl m-5">No matching poke!</h1>
  );

  return (
    <main>
      <Search data={data.results} setPokemons={setPokemons} />

      {results?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4">
          {content}
        </div>
      ) : (
        <div className="flex justify-center items-center">{emptyContent}</div>
      )}
    </main>
  );
};

export default Home;
