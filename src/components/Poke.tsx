import React from "react";
import { PokeType } from "../types/types";
import { useGetPokeQuery } from "../app/api/apiSlice";
import { LoadingSpinner } from "./Loading";

type PropsType = {
  poke: PokeType;
};

const Poke = ({ poke }: PropsType) => {
  const { data, isLoading } = useGetPokeQuery(poke.name);

  if (isLoading)
    return (
      <div className="flex h-96 w-full items-center justify-center rounded-lg border border-gray-100 bg-gray-50 p-4">
        <LoadingSpinner />
      </div>
    );

  if (!data) return <div>Something went wrong.</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-gray-400 bg-gray-200 transition duration-300 hover:scale-105">
      <img
        className="h-44 object-contain"
        src={
          data.sprites.other.dream_world.front_default ??
          data.sprites.other["official-artwork"].front_default
        }
        alt={data.name}
      />
      <h1 className="text-lg capitalize">{data.name}</h1>
    </div>
  );
};

export default Poke;
