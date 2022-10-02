import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const GenderQuery = gql`
  ${ProductFragment}
  query GenderQuery($gender: String!) {
    products(filters: { variant: { in: [$gender, "unisex"] } }) {
      meta {
        pagination {
          total
        }
      }
      data {
        ...ProductFragment
      }
    }
  }
`;
