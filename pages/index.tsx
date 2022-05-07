import type { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title="List Items pokemon">
      <h1>Hey</h1>
      <Button color="gradient">Hola mundo</Button>
    </Layout>
  );
};

export default Home;
