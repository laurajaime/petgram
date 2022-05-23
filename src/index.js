import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

import Context from './Context'

const authLink = setContext ((_, { headers }) => { // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem('token') // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const httpLink  = createHttpLink ({
  uri: 'https://petgram-server-phi-rose.vercel.app/graphql'
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(
    ({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    } 
  )
});

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
