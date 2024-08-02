import { getQuery } from "@/app/modules/shared/request-connection/queries"


export const getCharacters = () => {
    return getQuery`
  query GET_CHARACTERS($name: String!, $species: String!) {
    characters(filter: {name: $name, species: $species}) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }`

} 