import { Button } from "@/components/ui/button";
import { Character } from "../../interfaces/Character";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export type MainContentProps = {
  character: Character;
  show?: boolean;
};

export default function MainContent({ character, show }: MainContentProps) {
  const nameSplit = character.name.split(" ");
  const initials = nameSplit.map((name) => name[0]);
  return (
    <>
      {show && (
        <>
          <div className="flex py-6 px-6 xl:px-24  w-full flex-1">
            <div className="flex flex-col w-full">
              <Button  variant={"ghost"} className="text-primary w-fit mb-4">
                <Link href={"/"} title="pagina principal">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15L1 8M1 8L8 1M1 8L19 8"
                    stroke="#8054C7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </Link>
                
              </Button>
              <div className="bg-slate-200 size-20 rounded-full relative mb-4">
                <Avatar className="w-full h-full">
                  <AvatarImage
                    className="w-full h-full"
                    src={character.image}
                  ></AvatarImage>
                  <AvatarFallback>
                    {initials[0]}
                    {initials[1]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-[#111827]">
                {character.name}
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                  <span className="text-[#111827] font-semibold ">Specie</span>
                  <span className="text-[#6B7280] font-medium ">
                    {character.species}
                  </span>
                </li>
                <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                  <span className="text-[#111827] font-semibold ">Status</span>
                  <span className="text-[#6B7280] font-medium ">
                    {character.status}
                  </span>
                </li>
                <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                  <span className="text-[#111827] font-semibold ">
                    Occupation
                  </span>
                  <span className="text-[#6B7280] font-medium ">
                    {character.type}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
