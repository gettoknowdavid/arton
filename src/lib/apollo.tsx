import React from "react";
import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import isequal from "lodash.isequal";
import merge from "deepmerge";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const AUTH_TOKEN = "auth-token";

const uri =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_GRAPHQL_URI
    : process.env.NEXT_PUBLIC_GRAPHQL_URI_LOCAL;

// eslint-disable-next-line consistent-return
const token = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(AUTH_TOKEN);
  }
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ path, extensions }) => {
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]:   Extensions: ${extensions}, Path: ${path}`
      );
      // if (graphQLErrors || networkError) {
      //   cache.writeQuery({
      //     data: {
      //       error: {
      //         __typename: 'error',
      //         message: graphQLErrors[0].extensions.exception.data,
      //         // statusCode: networkError.statusCode,
      //       },
      //     },
      //   });
      // }
      // const { message } = extensions.exception.data;
      // console.log(message[0].messages[0].message);
      // throw new Error(message[0].messages[0]);
    });
  }

  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createApolloClient(ctx: any) {
  const httpLink = new HttpLink({
    uri: uri,
    credentials: "same-origin",
    headers: {
      ...ctx?.headers,
      authorization: token() ? `Bearer ${token()}` : "",
    },
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token() ? `Bearer ${token}` : "",
      },
    };
  });
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(from([errorLink, httpLink])),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState: any, ctx: any) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient(ctx);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isequal(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any, ctx: any) {
  return React.useMemo(
    () => initializeApollo(initialState, ctx),
    [initialState, ctx]
  );
}
