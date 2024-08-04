import { Metadata, ResolvingMetadata } from "next";
import MainLayoutWrapper from "../modules/home/components/MainLayoutWrapper";
import { Character } from "../modules/home/interfaces/Character";
import { getCharacterByIDRequest } from "../modules/home/services/get-character-by-id";
import { FILTERS_KEY } from "../modules/home/constants/filters";
import Head from "next/head";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const defaultCharacter: Character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: new Date("2017-11-04T18:48:46.250Z"),
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data = await getCharacterByIDRequest(Number(id));

  const character = data ?? defaultCharacter;

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: character.name,
    openGraph: {
      images: [character.image],
    },
  };
}

export default async function Page({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getCharacterByIDRequest(Number(id));

  const character = data ?? defaultCharacter;

  const species =
    searchParams?.species?.toString() === FILTERS_KEY.ALL
      ? ""
      : searchParams?.species?.toString() ?? "";
  return (
    <>
      <Head key={character.id}>
        <title>{character.name}</title>
      </Head>
      <MainLayoutWrapper
        searchParams={{
          name: searchParams?.q?.toString() ?? "",
          species,
        }}
        character={character}
        asideClassName="character"
        showBackButton={true}
      ></MainLayoutWrapper>
    </>
  );
}
