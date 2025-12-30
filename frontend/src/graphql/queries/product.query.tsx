import { gql } from "@apollo/client";
import { ColourFragment, ImageFragment, SizeFragment } from "../fragments";

export const ProductQuery = gql`
  ${ColourFragment}
  ${SizeFragment}
  ${ImageFragment}
  query ProductQuery($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          description
          slug
          price
          available
          brand
          details
          care
          variant
          tags {
            id
            title
          }
          colour {
            data {
              ...ColourFragment
            }
          }
          sizes {
            data {
              ...SizeFragment
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          images {
            data {
              ...ImageFragment
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
