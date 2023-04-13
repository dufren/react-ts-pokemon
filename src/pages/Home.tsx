import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { PokeType } from "../types/types";
import { useGetPokemonQuery } from "../app/api/apiSlice";
import { LoadingPage } from "../components/Loading";
import Search from "../components/Search";
import PokemonList from "../components/Pokemon";

type PaginationProps = {
  itemsPerPage: number;
};

function Home({ itemsPerPage }: PaginationProps) {
  const [pokemons, setPokemons] = useState<PokeType[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

  const { data, isLoading, isFetching, isSuccess } =
    useGetPokemonQuery(undefined);

  useEffect(() => {
    data && setPokemons(data.results);
  }, [isSuccess]);

  useEffect(() => {
    setItemOffset(0);
  }, [pokemons]);

  if (isLoading || isFetching) return <LoadingPage />;
  if (!data) return <div>Something went wrong.</div>;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pokemons.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Search data={data.results} setPokemons={setPokemons} />

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

export default Home;
