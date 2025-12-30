import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const ObjectsQuery = gql`
  ${ProductFragment}
  query ObjectsQuery {
    products(
      filters: { variant: { eq: "object" } }
      pagination: { limit: 100 }
    ) {
      data {
        ...ProductFragment
      }
    }
  }
`;
