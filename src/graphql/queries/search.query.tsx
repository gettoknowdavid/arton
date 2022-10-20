import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const SearchQuery = gql`
  query SearchQuery($title: String!) {
    products(filters: { title: { containsi: $title } }) {
      data {
        id
        attributes {
          title
          slug
          price
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
