/* eslint-disable import/no-anonymous-default-export */

const toggleFavorite = (id: number) => {
  let favorites: number[] = parseArray("favorites");

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  // if (typeof window === "undefined") return false; // If not in browser

  const favorites: number[] = parseArray("favorites");

  return favorites.includes(id);
};

const parseArray = (arr: string) => {
  return JSON.parse(localStorage.getItem(arr) || "[]");
};

export default { toggleFavorite, existInFavorites };
