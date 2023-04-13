// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { detailedPokeType, pokemonFetchType } from "../../types/types";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<pokemonFetchType, undefined>({
      query: () => `/pokemon?limit=2000`,
    }),
    getPoke: builder.query<detailedPokeType, string>({
      query: (url: string) => `pokemon/${url}`,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokeQuery } = apiSlice;
