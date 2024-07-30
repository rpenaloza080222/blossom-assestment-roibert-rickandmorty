import { gql } from "@apollo/client"

export const getQuery = (query: TemplateStringsArray) => {
    return gql(query)
}