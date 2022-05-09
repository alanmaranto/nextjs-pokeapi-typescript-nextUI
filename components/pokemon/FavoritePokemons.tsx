import React, { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemonCard } from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pokemonId) => (
        <Grid xs={6} sm={3} md={2} lg={1} key={pokemonId}>
          <FavoritePokemonCard pokemonId={pokemonId} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
