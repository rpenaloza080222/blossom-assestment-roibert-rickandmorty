import Link from "next/link";
import { Character } from "../../interfaces/Character";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FilledHeartIcon from "@/app/modules/shared/components/FilledHeartIcon";
import { cn } from "@/lib/utils";
import { useFavoriteStore } from "../../stores";

export type CardCharacterProps = {
  character: Character;
  isFavorite?: boolean
};

export default function CardCharacter({ character, isFavorite }: CardCharacterProps) {
  const nameSplit = character.name.split(" ");
  const initials = nameSplit.map((name) => name[0]);
  const favorites = useFavoriteStore((state) => state.favorites);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);

  const handleClick = (id: number) => {
    addFavorite(character);
  };

  return (
    <div
      key={character.id}
      className="flex items-center border-t border-t-[#E5E7EB] rounded-lg gap-4 px-5 py-4 cursor-pointer hover:bg-primary-100 transition-all duration-200"
    >
      <Link
        href={`/${character.id}`}
        title={`${character.name}`}
        className="flex w-full items-center gap-4"
      >
        <Avatar>
          <AvatarImage src={character.image} alt={character.name} />
          <AvatarFallback>
            {initials[0]}
            {initials[1]}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1 flex-1">
          <span className="text-[#111827] font-semibold">{character.name}</span>
          <span className="text-[#6B7280] "> {character.species}</span>
        </div>
      </Link>
      <button
        onClick={() => handleClick(character.id)}
        className={cn("size-8 rounded-full", isFavorite && " text-green-500")}
      >
        <FilledHeartIcon />
      </button>
    </div>
  );
}
