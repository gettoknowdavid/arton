import { initializeApollo } from "./apollo";
import { MutationOptions, QueryOptions } from "@apollo/client";

export async function fetchAPI({ query, variables }: QueryOptions) {
  const apollo = initializeApollo();
  return await apollo.query({
    query,
    variables,
  });
}

export async function postAPI({ mutation, variables }: MutationOptions) {
  const apollo = initializeApollo();
  return await apollo.mutate({
    mutation,
    variables,
    // context: {
    //   headers: {
    //     Authorization: token ? `Bearer ${token}` : "",
    //   },
    // },
  });
}
