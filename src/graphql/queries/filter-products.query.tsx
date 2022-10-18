import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const FilterProductsQuery = gql`
  ${ProductFragment}
  query FilterProductsQuery($catID: ID, $sort: String, $sizeID: ID) {
    products(
      sort: [$sort]
      filters: {
        category: { id: { eq: $catID } }
        sizes: { id: { eq: $sizeID } }
      }
    ) {
      data {
        ...ProductFragment
      }
    }
  }
`;
