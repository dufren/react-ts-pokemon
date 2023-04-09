import React from "react";
import { PokeType } from "../types/types";
import { useGetPokeQuery } from "../app/api/apiSlice";
import { LoadingPage } from "./Loading";

type PropsType = {
  poke: PokeType;
};

const Poke = ({ poke }: PropsType) => {
  const { data, isLoading } = useGetPokeQuery(poke.name);

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong.</div>;

  return (
    <div className="bg-gray-200 border border-gray-400 rounded-lg flex flex-col justify-center items-center gap-5">
      <img
        className="h-44 object-contain"
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
      />
      <h1>{data.name}</h1>
    </div>
  );
};

export default Poke;
