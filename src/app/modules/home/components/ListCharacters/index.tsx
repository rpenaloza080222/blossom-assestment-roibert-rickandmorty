"use client";
import { useEffect } from "react";
import { Character } from "../../interfaces/Character";
import { useFavoriteStore } from "../../stores";
import CardCharacter from "../CardCharacter";

export type ListCharactersProps = {
  data: Character[];
};

export default function ListCharacters({ data }: ListCharactersProps) {
  const initFavorites = useFavoriteStore((state) => state.initFavorites);
  const favorites = useFavoriteStore((state) => state.favorites);

  const isFavorite = (character: Character) => {
    return favorites.find(fav=> {
        console.log(typeof fav.id, fav.id, typeof character.id)
        return Number(fav.id) === Number(character.id)
    }) !== undefined
  }

  useEffect(() => {
    const favoritesStorage = localStorage.getItem("favorites");
    if(favoritesStorage){
        const favorites = JSON.parse(localStorage.getItem("favorites") ?? "")
        initFavorites(favorites)
    }
  }, [initFavorites]);

  return (
    <ul className="flex flex-col mt-4 max-h-[65vh] overflow-auto">
      {data?.map((character: Character) => (
        <CardCharacter isFavorite={isFavorite(character)} key={character.id} character={character} />
      ))}
    </ul>
  );
}
