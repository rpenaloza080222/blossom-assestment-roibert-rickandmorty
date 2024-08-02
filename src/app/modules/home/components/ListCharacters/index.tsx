"use client";
import { useEffect } from "react";
import { Character } from "../../interfaces/Character";
import { useFavoriteStore } from "../../stores";
import CardCharacter from "../CardCharacter";
import { useFiltersStore } from "../../stores/filters";
import { FILTERS_KEY } from "../../constants/filters";

export type ListCharactersProps = {
  data: Character[];
};

export default function ListCharacters({ data }: ListCharactersProps) {
  const filters = useFiltersStore((state) => state.filters);
  const initFavorites = useFavoriteStore((state) => state.initFavorites);
  const favorites = useFavoriteStore((state) => state.favorites);

  const isFavorite = (character: Character) => {
    return favorites.find(fav => {
      console.log(typeof fav.id, fav.id, typeof character.id)
      return Number(fav.id) === Number(character.id)
    }) !== undefined
  }

  const getData = () => {
    if (filters.character === FILTERS_KEY.ALL) {
      return data
    }

    if (filters.character === FILTERS_KEY.STARRED) {
      return data.filter(character => isFavorite(character))
    }

    if (filters.character === FILTERS_KEY.OTHERS) {
      return data.filter(character => !isFavorite(character))
    }

    return data
  };

  useEffect(() => {
    const favoritesStorage = localStorage.getItem("favorites");
    if (favoritesStorage) {
      const favorites = JSON.parse(localStorage.getItem("favorites") ?? "")
      initFavorites(favorites)
    }
  }, [initFavorites]);

  return (
    <>
      <div className="">
        <h3 className="text-[12px] text-black mt-6 uppercase">
          Characters ({getData()?.length ?? 0})
        </h3>
      </div>
      <ul className="flex flex-col mt-4 max-h-full overflow-auto">
        {getData()?.map((character: Character) => (
          <CardCharacter isFavorite={isFavorite(character)} key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
}
