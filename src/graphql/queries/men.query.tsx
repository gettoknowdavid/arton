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
    categories(filters: { variant: { in: ["male", "unisex"] } }) {
      data {
        id
        attributes {
          name
        }
      }
    }
    sizes(sort: ["id"]) {
      data {
        id
        attributes {
          code
        }
      }
    }
  }
`;
