import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCharacters } from "./modules/home/services/get-characters";
import { connection } from "./modules/shared/request-connection";
import { ApolloProvider } from "@apollo/client";
import FilledHeartIcon from './modules/shared/components/FilledHeartIcon';
import { Button } from "@/components/ui/button";
import { FiltersIcon } from './modules/shared/components/FiltersIcon';
import Aside from './modules/home/components/Aside/index';
import MainContent from './modules/home/components/MainContent/index';
import MainLayoutWrapper from "./modules/home/components/MainLayoutWrapper";
import { FILTERS_KEY } from "./modules/home/constants/filters";
const client = connection();
export default async function Home({
  searchParams, }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
  console.log("searchParams", searchParams)
  const species = searchParams?.species?.toString() === FILTERS_KEY.ALL ? "": searchParams?.species?.toString()  ?? ""
  return (
    <MainLayoutWrapper searchParams={
      {
        name: searchParams?.q?.toString() ?? "",
        species
      }
      
    } showAside showMain />
  );
}
