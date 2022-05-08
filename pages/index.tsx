import type { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="List Items pokemon">
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={name}>
            #{id} - {name}
          </li>
        ))}
      </ul>
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
