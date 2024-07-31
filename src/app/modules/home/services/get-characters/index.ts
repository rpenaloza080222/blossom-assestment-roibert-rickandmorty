import { getQuery } from "@/app/modules/shared/request-connection/queries"


export const getCharacters = () => {
    return getQuery`
  query GET_CHARACTERS($page: Int!, $name: String!, $status: String!, $species: String!, $gender: String!) {
    characters(page: $page, filter: {name: $name, status: $status, species: $species, gender: $gender}) {
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