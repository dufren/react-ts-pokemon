import { useState, useEffect } from "react";
import { PokeType } from "../types/types";
import { useGetPokemonQuery } from "../app/api/apiSlice";
import { LoadingPage } from "../components/Loading";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

function Home() {
  const [pokemons, setPokemons] = useState<PokeType[]>([]);

  const { data, isLoading, isFetching, isSuccess } =
    useGetPokemonQuery(undefined);

  useEffect(() => {
    data && setPokemons(data.results);
  }, [isSuccess]);

  let content;

  if (isLoading || isFetching) content = <LoadingPage />;

  if (!data) content = <div>Something went wrong.</div>;

  if (isSuccess) {
    content = (
      <>
        <Search data={data.results} setPokemons={setPokemons} />
        <Pagination itemsPerPage={20} pokemons={pokemons} />
      </>
    );
  }

  return content ?? <div>Something went wrong.</div>;
}

export default Home;
