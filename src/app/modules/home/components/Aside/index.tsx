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

export type AsideProps = {
    name: string
    status: string
    species: string
    gender: string
    page: number
}

const client = connection();

export default async function Aside({
    name,
    status,
    species,
    gender,
    page
}: AsideProps) {

    const { data: dataResults } = await client.query({
        query: getCharacters(),
        variables: {
            name,
            status,
            species,
            gender,
            page
        }
    })
    const data = dataResults.characters.results

    return (
        <div className="flex items-center w-full xl:w-1/4  h-full">
            <aside className="w-full h-full p-4 pt-10 bg-slate-50">
                <h1 className="text-2xl text-black mb-6 font-bold">Rick and Morty list</h1>
                <FiltersInput
                    value={name}
                />
                <div className="">
                    <h3 className="text-[12px] text-black mt-6 uppercase">Starred Characters (2)</h3>
                </div>
                <ul className="flex flex-col gap-2 mt-4">
                    <li className="flex items-center rounded-lg gap-4 px-5 py-4 cursor-pointer hover:bg-primary-100 transition-all duration-200">
                        <div className="size-8 bg-slate-200 rounded-full">
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-[#111827] font-semibold">Roibert Peñaloza</span>
                            <span className="text-[#6B7280] ">Roibert Peñaloza</span>
                        </div>
                        <div className="size-8 bg-white rounded-full">

                        </div>
                    </li>
                </ul>
                <div className="">
                    <h3 className="text-[12px] text-black mt-6 uppercase">Characters ({data?.length ?? 0})</h3>
                </div>
                <ul className="flex flex-col mt-4 max-h-[600px] overflow-auto">
                    {data?.map((character: Character) => (
                        <CardCharacter character={character} />
                    ))}

                </ul>
            </aside>
        </div>
    )
}