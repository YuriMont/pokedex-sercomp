"use client";
import { PokemonContext } from "@/config/context/pokemonContext";
import { useContext } from "react";
import { Tag } from "./Tag";

export function PokemonDetails() {
  const pokemonContext = useContext(PokemonContext);

  if (!pokemonContext?.pokemonSelected) {
    return <div>Vazio</div>;
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row card items-center justify-between gap-6 p-2 md:p-4">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            className="w-[116px] h-[116px]"
            src={
              pokemonContext.pokemonSelected.sprites.versions["generation-v"][
                "black-white"
              ].animated.front_default || ""
            }
            alt={pokemonContext.pokemonSelected.name}
          />
          <h1 className="font-bold text-2xl text-brand-primary capitalize">
            {pokemonContext.pokemonSelected.name}
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-2">
            {pokemonContext.pokemonSelected.types.map((item, index) => (
              <Tag key={index} type={item.type.name} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-8">

          <div className="flex flex-col gap-1 items-center justify-center">
            <h1 className="font-medium text-sm text-brand-primary">Numero</h1>
            <h3 className="font-light text-sm text-brand-primary">
              {pokemonContext.pokemonSelected.order}
            </h3>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <h1 className="font-medium text-sm text-brand-primary">Exp</h1>
            <h3 className="font-light text-sm text-brand-primary">
              {pokemonContext.pokemonSelected.base_experience}
            </h3>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <h1 className="font-medium text-sm text-brand-primary">Altura</h1>
            <h3 className="font-light text-sm text-brand-primary">
              {pokemonContext.pokemonSelected.height / 10}m
            </h3>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <h1 className="font-medium text-sm text-brand-primary">Peso</h1>
            <h3 className="font-light text-sm text-brand-primary">
              {pokemonContext.pokemonSelected.weight / 10}kg
            </h3>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col gap-4 justify-around items-center">
        {pokemonContext.pokemonSelected.stats.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-8 w-full">
            <h1 className="font-medium text-xs text-brand-primary capitalize">
              {item.stat.name}
            </h1>
            <h3 className="font-light text-xs text-brand-primary">
              {item.base_stat}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
