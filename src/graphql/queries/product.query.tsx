import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const ProductQuery = gql`
  ${ProductFragment}
  query ProductQuery($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        ...ProductFragment
      }
    }
  }
`;
