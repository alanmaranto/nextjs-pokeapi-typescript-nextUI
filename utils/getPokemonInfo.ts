import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };

    return pokemon;
  } catch (error) {
    console.log(error);
    return null;
  }
};
