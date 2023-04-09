import React, { useRef } from "react";
import { PokeType } from "../types/types";

type Props = {
  data: PokeType[];
  setPokemons: React.Dispatch<React.SetStateAction<PokeType[]>>;
};

const Search: React.FC<Props> = ({ data, setPokemons }) => {
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
    <div className="flex justify-center items-center max-w-5xl mx-auto m-3">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          className="w-full p-4 bg-gray-200 border border-gray-400 rounded-lg outline-none"
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
