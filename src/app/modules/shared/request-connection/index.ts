import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { environment } from '../environment';



const client = new ApolloClient({
    uri: environment.API_URL,
    cache: new InMemoryCache(),
});
export const connection = () => {
    console.log("Url", environment.API_URL)
    return client
}