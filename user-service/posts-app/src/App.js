import React from 'react';
import { ApolloProvider, client } from './apolloClient';
import PostsTable from './PostsTable';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Posts Per User</h1>
        <PostsTable />
      </div>
    </ApolloProvider>
  );
}

export default App;
