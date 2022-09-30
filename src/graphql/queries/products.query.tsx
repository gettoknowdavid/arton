import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const ProductsQuery = gql`
  ${ProductFragment}
  query ProductsQuery {
    products {
      data {
        ...ProductFragment
      }
    }
  }
`;
