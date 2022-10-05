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

export const SeoFragment = gql`
  ${ImageFragment}
  fragment SeoFragment on ComponentSharedSeo {
    id
    metaTitle
    metaDescription
    metaRobots
    structuredData
    metaViewport
    canonicalURL
    keywords
    metaImage {
      data {
        ...ImageFragment
      }
    }
    metaSocial {
      id
      socialNetwork
      title
      description
      image {
        data {
          ...ImageFragment
        }
      }
    }
  }
`;

export const ColourFragment = gql`
  fragment ColourFragment on ColourEntity {
    attributes {
      title
    }
  }
`;

export const SizeFragment = gql`
  fragment SizeFragment on SizeEntity {
    id
    attributes {
      title
      sizeCode
    }
  }
`;

export const ProductFragment = gql`
  ${ColourFragment}
  ${SizeFragment}
  ${ImageFragment}
  fragment ProductFragment on ProductEntity {
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
          ...ImageFragment
        }
      }
      images {
        data {
          ...ImageFragment
        }
      }
    }
  }
`;
