import { Character } from "../../interfaces/Character";
import Aside, { AsideProps } from "../Aside";
import MainContent from "../MainContent";

export type MainLayoutWrapperProps = {
  searchParams: AsideProps;
  character?: Character;
  asideClassName?: string;
  mainClassName?: string;
  showMain?: boolean;
};

const defaultCharacter: Character = {
  id: 1,
  name: "Roibert Peñaloza",
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

export default function MainLayoutWrapper({
  searchParams,
  mainClassName,
  character,
  asideClassName,
  showMain,
}: MainLayoutWrapperProps) {
  return (
    <main className="flex bg-white h-screen ">
      <Aside className={asideClassName} {...searchParams} />
      <MainContent
        className={mainClassName}
        character={character ?? defaultCharacter}
      />
    </main>
  );
}
