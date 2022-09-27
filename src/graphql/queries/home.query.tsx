import { gql } from "@apollo/client";
import { CategoryFragment, ImageFragment, SeoFragment } from "../fragments";

export const HomeQuery = gql`
  ${ImageFragment}
  ${SeoFragment}
  ${CategoryFragment}
  query HomeQuery {
    home {
      data {
        attributes {
          seo {
            ...SeoFragment
          }
          heroImage {
            data {
              ...ImageFragment
            }
          }
          menCategories: categories(
            filters: { variant: { eq: "male" } }
            pagination: { limit: 3 }
          ) {
            data {
              ...CategoryFragment
            }
          }
          womenCategories: categories(
            filters: { variant: { eq: "female" } }
            pagination: { limit: 3 }
          ) {
            data {
              ...CategoryFragment
            }
          }
        }
      }
    }
  }
`;