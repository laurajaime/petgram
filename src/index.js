import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Context from './Context'

const client = new ApolloClient({
  uri: "https://petgram-server-phi-rose.vercel.app/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
