"use client";
import { PokemonList } from "@/components/PokemonList";
import { PokemonPagination } from "@/components/PokemonPagination";
import { Skeleton } from "@/components/Skeleton";
import { PokemonContext } from "@/config/context/pokemonContext";
import { fetchPokemonByName, fetchPokemons } from "@/hooks/usePokemons";
import { Pokemon } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const [count, setCount] = useState(0);

  const searchParams = useSearchParams();

  const page = searchParams.get("page") || "1";

  const [isLoading, setIsLoading] = useState(true);

  const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null);

  const MAX_POKEMONS_BY_PAGE = 20;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPokemons({
          limit: MAX_POKEMONS_BY_PAGE,
          offset: (Number(page) - 1) * MAX_POKEMONS_BY_PAGE,
        });

        setCount(response.count);

        const pokemonData = await Promise.all(
          response.results.map((item) => fetchPokemonByName(item.name))
        );

        setPokemons(pokemonData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemons || [],
        pokemonSelected,
        setPokemonSelected,
        count,
        maxPokemonsByPage: MAX_POKEMONS_BY_PAGE,
      }}
    >
      <main className="flex flex-col gap-4 p-8">
        <h1 className="text-center font-bold text-5xl text-brand-primary">
          Pokedex Sercomp
        </h1>
        
        {isLoading && (
          <div className="w-fit mx-auto flex items-center flex-wrap gap-4 justify-center xl:grid xl:grid-cols-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
              <Skeleton key={item} className="w-[244px] h-[264px]" />
            ))}
          </div>
        )}

        <PokemonList />
        <PokemonPagination />
      </main>
    </PokemonContext.Provider>
  );
}
