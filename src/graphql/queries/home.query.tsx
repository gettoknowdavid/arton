import { gql } from "@apollo/client";
import { CategoryFragment, ImageFragment, SeoFragment } from "../fragments";

export const HomeHeroQuery = gql`
  ${ImageFragment}
  query HomeHeroQuery {
    home {
      data {
        attributes {
          heroImage {
            data {
              ...ImageFragment
            }
          }
        }
      }
    }
  }
`;

export const HomeQuery = gql`
  ${ImageFragment}
  ${CategoryFragment}
  query HomeQuery {
    home {
      data {
        attributes {
          menCategories: categories(
            filters: { variant: { eq: "male" } }
            pagination: { limit: 4 }
          ) {
            data {
              ...CategoryFragment
            }
          }
          womenCategories: categories(
            filters: { variant: { eq: "female" } }
            pagination: { limit: 4 }
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
