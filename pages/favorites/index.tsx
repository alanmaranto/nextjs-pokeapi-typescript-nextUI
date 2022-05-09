import { Card, Grid } from "@nextui-org/react";
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
      {favoritePokemons.length > 0 ? (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritePokemons.map((pokemonId) => (
            <Grid xs={6} sm={3} md={2} lg={1} key={pokemonId}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                  width="100%"
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
