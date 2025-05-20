import { api } from "../config/api";
import type { Pokemon, PokemonsResponse } from "../types";

export async function fetchPokemons({
  offset,
  limit,
}: {
  offset?: number;
  limit?: number;
}): Promise<PokemonsResponse> {
  const response = await api.get("/pokemon", {
    params: {
      offset,
      limit,
    },
  });

  return response.data;
}

export async function fetchPokemonByName(name: string): Promise<Pokemon> {
  const response = await api.get(`/pokemon/${name}`);

  return response.data;
}
