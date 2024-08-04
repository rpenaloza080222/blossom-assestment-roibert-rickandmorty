import { connection } from "@/app/modules/shared/request-connection";
import { getQuery } from "@/app/modules/shared/request-connection/queries"
import { Character } from "../../interfaces/Character";

const client = connection();
const getCharacterById = () => {
    return getQuery`
  query GET_CHARACTERS_BY_ID($id: ID!) {
    character(id: $id) {
    id
    name
    status
    species
    gender
    image,
    type
  }
  }`

} 

export const getCharacterByIDRequest = async (id: number) => {
  try {
    const { data: dataResults } = await client.query({
      query: getCharacterById(),
      variables: {
        id: Number(id)
      }
    })
    const data = dataResults.character
    return data as Character
  } catch (error) {
    return null
  }
  
}