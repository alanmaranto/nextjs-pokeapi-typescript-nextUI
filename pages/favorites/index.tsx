import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Favorites Pokemon">
      {favoritePokemons.length > 0 ? (
        <FavoritePokemons pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
