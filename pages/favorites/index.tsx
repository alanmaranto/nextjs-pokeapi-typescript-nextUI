import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Favorites Pokemon">
      <NoFavorites />
    </Layout>
  );
};

export default Favorites;
