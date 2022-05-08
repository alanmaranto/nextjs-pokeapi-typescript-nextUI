import type { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";

const Home: NextPage = () => {
  return (
    <Layout title="List Items pokemon">
      <h1>Hey</h1>
      <Button color="gradient">Hola mundo</Button>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");
  console.log(data);
  return {
    props: {
      pokemons: data.results,
    },
  };
};
