import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

interface Props {
  //   pokemon: any;
  id: string;
  name: string;
}

const Pokemon: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();

  return (
    <Layout title="Pokemon">
      <h1>
        {id} - {name}{" "}
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here

  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await  // your fetch function here

  return {
    props: {
      id: 1,
      name: "Bulbasaur",
    },
  };
};

export default Pokemon;
