import { gql } from "@apollo/client"

export const getQuery = (query: string | readonly string[] ) => {
    return gql(query)
    
}