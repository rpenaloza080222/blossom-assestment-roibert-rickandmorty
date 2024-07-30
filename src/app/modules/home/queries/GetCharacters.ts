import { gql } from "@apollo/client";

export const GET_CHARACTERS = `query GET_CHARACTERS{
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