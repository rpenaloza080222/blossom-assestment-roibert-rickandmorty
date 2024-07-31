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
const client = connection();
export default async function Home({
  searchParams, }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
  console.log("searchParams", searchParams)

  return (
    <MainLayoutWrapper searchParams={
      {
        name: searchParams?.q?.toString() ?? "",
        status: searchParams?.status?.toString() ?? "",
        species: searchParams?.species?.toString() ?? "",
        gender: searchParams?.gender?.toString() ?? "",
        page: Number(searchParams?.page ?? "1") ?? 1
      }
    }  />
  );
}
