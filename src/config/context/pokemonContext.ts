import { createContext } from "react";
import type { Pokemon } from "../../types";

type ContextPokemonsProps = {
    pokemons: Pokemon[],
    pokemonSelected: Pokemon | null,
    setPokemonSelected: (pokemon: Pokemon) => void;
    count: number;
    maxPokemonsByPage: number
}

export const PokemonContext = createContext<ContextPokemonsProps | null>(null);