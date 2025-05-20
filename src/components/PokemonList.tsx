"use client";
import { useContext } from "react";
import { PokemonContext } from "../config/context/pokemonContext";
import { Card } from "./Card";

export function PokemonList() {
  const pokemonContext = useContext(PokemonContext);

  return (
    <div className="w-fit mx-auto flex items-center flex-wrap gap-4 justify-center xl:grid xl:grid-cols-4">
      {pokemonContext?.pokemons.map((item) => (
        <Card
          onClick={() => pokemonContext.setPokemonSelected(item)}
          imgUrl={
            item.sprites.versions["generation-v"]["black-white"].animated
              .front_default || ""
          }
          types={item.types}
          key={item.id}
          name={item.name}
          order={item.order}
        />
      ))}
    </div>
  );
}
