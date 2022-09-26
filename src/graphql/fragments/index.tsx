import { gql } from "@apollo/client";

export const ImageFragment = gql`
  fragment ImageFragment on UploadFileEntity {
    id
    attributes {
      alternativeText
      url
    }
  }
`;

export const CategoryFragment = gql`
  ${ImageFragment}
  fragment CategoryFragment on CategoryEntity {
    id
    attributes {
      name
      slug
      variant
      image {
        data {
          ...ImageFragment
        }
      }
    }
  }
`;
