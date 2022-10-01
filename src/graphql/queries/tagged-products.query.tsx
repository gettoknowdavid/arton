import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const TaggedProductsQuery = gql`
  ${ProductFragment}
  query TaggedProductsQuery(
    $tagList: [String]!
    $variantList: [String]
    $notIncludeTitle: String!
  ) {
    products(
      filters: {
        tags: { title: { in: $tagList } }
        title: { ne: $notIncludeTitle }
        variant: { in: $variantList }
      }
    ) {
      data {
        ...ProductFragment
      }
    }
  }
`;
