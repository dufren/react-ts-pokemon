import React, { useRef } from "react";
import { PokeType } from "../types/types";

type Props = {
  data: PokeType[];
  setPokemons: React.Dispatch<React.SetStateAction<PokeType[]>>;
};

const Search = ({ data, setPokemons }: Props) => {
  const searchValue = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>
    e.preventDefault();

  function filterPokemons(data: PokeType[]) {
    //searches the list
    const searchString = searchValue?.current?.value?.toLocaleLowerCase() ?? "";

    const filteredPokemons = data.filter((poke) => {
      return poke.name.toLocaleLowerCase().includes(searchString);
    });
    return filteredPokemons;
  }

  const filterAndSort = () => {
    const filteredPokemons = filterPokemons(data);
    setPokemons(filteredPokemons);
  };

  return (
    <div className="m-3 mx-auto flex max-w-xs items-center justify-center sm:max-w-md md:max-w-lg lg:max-w-5xl">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-lg border border-gray-400 bg-gray-200 p-4 outline-none"
          type="text"
          placeholder="search poke..."
          ref={searchValue}
          onChange={filterAndSort}
        />
      </form>
    </div>
  );
};

export default Search;
