import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Your Apollo Server URL
  cache: new InMemoryCache(),
});

export { client, ApolloProvider };
