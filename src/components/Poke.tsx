import React from "react";
import { useGetPokeQuery } from "../app/api/apiSlice";

import { useParams } from "react-router-dom";
import { LoadingPage } from "./Loading";

export default function Poke() {
  const { name } = useParams();

  if (!name) return <div>Something went wrong.</div>;

  const { data, isLoading, isFetching, isSuccess } = useGetPokeQuery(name);

  let content;

  if (isLoading || isFetching) content = <LoadingPage />;

  if (!data) content = <div>Something went wrong.</div>;

  if (isSuccess) {
    content = (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-gray-400 bg-gray-200 p-5">
          <img
            src={data.sprites.other.dream_world.front_default}
            alt="poke-avatar"
          />
          <h1 className="text-2xl capitalize">{data.name}</h1>
          <div className="flex flex-row gap-5">
            {data.types.map((type) => {
              return (
                <h2
                  className="text-lg font-extrabold capitalize"
                  key={type.slot}
                >
                  {type.type.name}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return content ?? <div>Something went wrong.</div>;
}
