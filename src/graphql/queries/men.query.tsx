import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const MenQuery = gql`
  ${ProductFragment}
  query MenQuery {
    products(filters: { variant: { in: ["male", "unisex"] } }) {
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
