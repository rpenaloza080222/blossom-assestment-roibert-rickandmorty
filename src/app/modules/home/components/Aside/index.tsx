import FilledHeartIcon from "@/app/modules/shared/components/FilledHeartIcon";
import { FiltersIcon } from "@/app/modules/shared/components/FiltersIcon";
import { connection } from "@/app/modules/shared/request-connection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getCharacters } from "../../services/get-characters";
import Link from "next/link";
import FiltersInput from "@/app/modules/shared/components/FiltersInput";
import CardCharacter from "../CardCharacter";
import { Character } from "../../interfaces/Character";
import ListCharacters from "../ListCharacters";
import StarredList from "../StarredList";

export type AsideProps = {
  name: string;
  species: string;
};

const client = connection();

export default async function Aside({
  name,
  species,
}: AsideProps) {
  const { data: dataResults } = await client.query({
    query: getCharacters(),
    variables: {
      name,
      species,
    },
  });
  const data = dataResults.characters.results;
  console.log("Results", dataResults.results)

  return (
    <div className="flex items-center w-full xl:w-1/4  h-full">
      <aside className="w-full h-full flex flex-col p-4 pt-10 bg-slate-50">
        <div className="flex flex-col">
          <h1 className="text-2xl text-black mb-6 font-bold">
            Rick and Morty list
          </h1>
          <FiltersInput value={name} />

          <StarredList />
        </div>
        <ListCharacters data={data} />
      </aside>
    </div>
  );
}
