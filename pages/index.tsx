import type { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="List Items pokemon">
      <Grid.Container gap={2} justify="center">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  // quicktype.io

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
