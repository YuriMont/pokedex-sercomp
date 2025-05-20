import type { PokemonType } from "../types";

type TagProps = {
  type: PokemonType;
};

type TypesPokemonsStyle = {
  [key in PokemonType]: {
    style: string;
  };
};

const typesPokemonsStyle: TypesPokemonsStyle = {
  normal: { style: "bg-gray-400 text-gray-700" },
  fighting: { style: "bg-red-500 text-red-800" },
  flying: { style: "bg-indigo-300 text-indigo-800" },
  poison: { style: "bg-purple-600 text-purple-900" },
  ground: { style: "bg-yellow-700 text-yellow-900" },
  rock: { style: "bg-yellow-800 text-yellow-900" },
  bug: { style: "bg-lime-500 text-lime-800" },
  ghost: { style: "bg-indigo-800 text-indigo-950" },
  steel: { style: "bg-gray-500 text-gray-800" },
  fire: { style: "bg-orange-500 text-orange-800" },
  water: { style: "bg-blue-500 text-blue-800" },
  grass: { style: "bg-green-500 text-green-800" },
  electric: { style: "bg-yellow-400 text-yellow-700" },
  psychic: { style: "bg-pink-500 text-pink-800" },
  ice: { style: "bg-cyan-300 text-cyan-700" },
  dragon: { style: "bg-indigo-600 text-indigo-900" },
  dark: { style: "bg-gray-800 text-gray-950" },
  fairy: { style: "bg-pink-300 text-pink-700" },
  stellar: { style: "bg-fuchsia-500 text-fuchsia-800" },
  unknown: { style: "bg-neutral-400 text-neutral-700" },
};

export function Tag({ type }: TagProps) {
  return (
    <div className={`font-medium text-xxs rounded-[0.25rem] px-2 py-0.5 flex items-center justify-center capitalize ${typesPokemonsStyle[type].style}`}>
      {type}
    </div>
  );
}
