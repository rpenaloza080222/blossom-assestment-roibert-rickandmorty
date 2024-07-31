import MainLayoutWrapper from "../modules/home/components/MainLayoutWrapper";
import { Character } from "../modules/home/interfaces/Character";
import { getCharacterByIDRequest } from "../modules/home/services/get-character-by-id";

const defaultCharacter: Character = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": new Date("2017-11-04T18:48:46.250Z")
}

export default async function Page(
    { params: { id }, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | string[] | undefined } }
) {
    const data = await getCharacterByIDRequest(Number(id))

    return (
        <MainLayoutWrapper
            searchParams={{
                name: searchParams?.q?.toString() ?? "",
                status: searchParams?.status?.toString() ?? "",
                species: searchParams?.species?.toString() ?? "",
                gender: searchParams?.gender?.toString() ?? "",
                page: Number(searchParams?.page ?? "1")
            }}
            character={data ?? defaultCharacter}
        >
            
       </MainLayoutWrapper>
    )
}