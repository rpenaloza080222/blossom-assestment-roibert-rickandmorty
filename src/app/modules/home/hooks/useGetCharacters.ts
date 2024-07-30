import { gql, useQuery } from '@apollo/client';

import { Character } from '../interfaces/Character';
import { getCharacters } from '../services/get-characters';
const GET_CHARACTERS = gql`query GET_CHARACTERS{
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

export const useGetCharacters = () => {
    return useQuery(getCharacters());
}