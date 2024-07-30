import { getQuery } from "@/app/modules/shared/request-connection/queries"
import { data_characters } from "../../data"
import { GET_CHARACTERS } from "../../queries/GetCharacters"

export const getCharacters = () => {
    return getQuery`query GET_CHARACTERS{
    characters(page: 2, filter: { name: "rick" }) {
        info {
            count
        }
        results {
            name,
            species
        }
    }
    location(id: 1) {
        id
    }
    episodesByIds(ids: [1, 2]) {
        id
    }
}`
} 