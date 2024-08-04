import MainLayoutWrapper from "./modules/home/components/MainLayoutWrapper";
import { FILTERS_KEY } from "./modules/home/constants/filters";
import { connection } from "./modules/shared/request-connection";
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
      
    } mainClassName="hidden lg:flex" />
  );
}
