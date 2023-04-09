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
      <div className="w-full h-96 bg-gray-50 border border-gray-100 rounded-lg p-4 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  if (!data) return <div>Something went wrong.</div>;

  return (
    <div className="hover:scale-105 transition duration-300 bg-gray-200 border border-gray-400 rounded-lg flex flex-col justify-center items-center gap-5">
      <img
        className="h-44 object-contain"
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
      />
      <h1 className="text-lg capitalize">{data.name}</h1>
    </div>
  );
};

export default Poke;
