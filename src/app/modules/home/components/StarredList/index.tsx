"use client";
import { Character } from "../../interfaces/Character";
import { useFavoriteStore } from "../../stores";
import CardCharacter from "../CardCharacter";

export default function StarredList() {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <>
      {favorites.length > 0 && (
        <>
          <div className="">
            <h3 className="text-[12px] text-black mt-6 uppercase">
              Starred Characters ({favorites.length})
            </h3>
          </div>
          <ul className="flex flex-col gap-2 mt-4 max-h-[20vh] overflow-auto">
            {favorites?.map((character: Character) => (
              <CardCharacter
                isFavorite={true}
                key={character.id}
                character={character}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
