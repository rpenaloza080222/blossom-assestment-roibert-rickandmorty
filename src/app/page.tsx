
import Image from "next/image";
import { getCharacters } from "./modules/home/services/get-characters";
import { useGetCharacters } from "./modules/home/hooks/useGetCharacters";
import { connection } from "./modules/shared/request-connection";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
const client = connection();
export default async function Home() {
  console.log(await client.query({
    query: gql`query GetCharacters {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
` }))
  return <></>
 
  

  return (
    <ApolloProvider client={client}>
      <main className="flex bg-white h-screen ">
        <div className="flex items-center w-full xl:w-1/4  h-full">
          <aside className="w-full h-full p-4 pt-10 bg-slate-50">
            <h1 className="text-2xl text-black mb-6 font-bold">Rick and Morty list</h1>
            <div className="bg-[#F3F4F6] h-14 flex items-center rounded-md p-2 :focus-within:ring-2 :focus-within:ring-blue-500">
              <input placeholder="Search or filter results" type="search" name="" id="" className="h-full outline-none w-[90%] bg-transparent p-4" />
            </div>
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
              <h3 className="text-[12px] text-black mt-6 uppercase">Characters (2)</h3>
            </div>
            <ul className="flex flex-col gap-2 mt-4">
              {false && data?.map((character:any) => (
                <li className="flex items-center border-y border-y-[#E5E7EB] rounded-lg gap-4 px-5 py-4 cursor-pointer hover:bg-primary-100 transition-all duration-200">
                  <div className="size-8 bg-slate-200 rounded-full">
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-[#111827] font-semibold">{character.name}</span>
                    <span className="text-[#6B7280] "> {character.species}</span>
                  </div>
                  <div className="size-8 bg-white rounded-full">

                  </div>
                </li>
              ))}

            </ul>
          </aside>
        </div>
        <div className="hidden xl:flex py-6  px-24  w-full flex-1">
          <div className="flex flex-col w-full">
            <div className="bg-slate-200 size-20 rounded-full relative mb-4">
              <div className="absolute size-6 rounded-full bg-black right-0 bottom-0"></div>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-[#111827]">Abadango Cluster Princess</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                <span className="text-[#111827] font-semibold ">dsddsdsd</span>
                <span className="text-[#6B7280] font-medium ">dsddsdsd</span>
              </li>
              <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                <span className="text-[#111827] font-semibold ">dsddsdsd</span>
                <span className="text-[#6B7280] font-medium ">dsddsdsd</span>
              </li>
              <li className="flex flex-col pb-4 border-b border-b-[#E5E7EB]">
                <span className="text-[#111827] font-semibold ">dsddsdsd</span>
                <span className="text-[#6B7280] font-medium ">dsddsdsd</span>
              </li>
            </ul>
          </div>

        </div>


      </main>
    </ApolloProvider>
    
  );
}
