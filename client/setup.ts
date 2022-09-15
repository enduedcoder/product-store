import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: `http://localhost:8080/graphql`,
  cache,
});

export default apolloClient;
