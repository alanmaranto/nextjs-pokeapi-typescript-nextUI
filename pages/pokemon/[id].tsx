import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

interface Props {
  pokemon: any;
}

const Pokemon = () => {
  const router = useRouter();

  return (
    <Layout title="Pokemon">
      <h1>Pokemon</h1>
    </Layout>
  );
};

export default Pokemon;
