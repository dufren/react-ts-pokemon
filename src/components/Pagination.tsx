import React, { useState, useEffect } from "react";
import { PokeType } from "../types/types";
import ReactPaginate from "react-paginate";
import PokemonList from "./PokemonList";

type PaginationProps = {
  itemsPerPage: number;
  pokemons: PokeType[];
};

export default function Pagination({
  itemsPerPage,
  pokemons,
}: PaginationProps) {
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [pokemons]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pokemons.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <PokemonList pokemons={currentItems} />

      <ReactPaginate
        className="flex flex-row items-center justify-center gap-3 p-5"
        previousLinkClassName="sr-only"
        nextLinkClassName="sr-only"
        pageLinkClassName="border border-gray-400 bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
