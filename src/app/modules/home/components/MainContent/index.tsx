import { Character } from "../../interfaces/Character"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export type MainContentProps = {
    character: Character
}

export default function MainContent({ character }: MainContentProps) {
    const nameSplit = character.name.split(" ");
    const initials = nameSplit.map((name) => name[0]);
    return <div className="hidden xl:flex py-6  px-24  w-full flex-1">
        <div className="flex flex-col w-full">
            <div className="bg-slate-200 size-20 rounded-full relative mb-4">
                <Avatar className="w-full h-full">
                    <AvatarImage className="w-full h-full" src={character.image}></AvatarImage>
                    <AvatarFallback>{initials[0]}{initials[1] }</AvatarFallback>
               </Avatar>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-[#111827]">{character.name}</h2>
            <ul className="flex flex-col gap-4">
                <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                    <span className="text-[#111827] font-semibold ">Specie</span>
                    <span className="text-[#6B7280] font-medium ">{character.species}</span>
                </li>
                <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                    <span className="text-[#111827] font-semibold ">Status</span>
                    <span className="text-[#6B7280] font-medium ">{character.status}</span>
                </li>
                <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                    <span className="text-[#111827] font-semibold ">Occupation</span>
                    <span className="text-[#6B7280] font-medium ">{character.type}</span>
                </li>
            </ul>
        </div>

    </div>
}