import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const ObjectsQuery = gql`
  ${ProductFragment}
  query ObjectsQuery {
    products(filters: { category: { slug: { in: ["objects"] } } }) {
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
