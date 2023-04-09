import React, { useState } from "react";
import { useGetPokemonQuery } from "../app/api/apiSlice";
import { LoadingPage } from "../components/Loading";
import Poke from "../components/Poke";

const Home = () => {
  const [dataLimit, setDataLimit] = useState({ offset: 0, limit: 0 });

  const { data, isLoading, isFetching } = useGetPokemonQuery(dataLimit);

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {!isFetching ? (
        data.results.map((poke) => <Poke key={poke.name} poke={poke} />)
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default Home;
