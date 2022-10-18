import { gql } from "@apollo/client";
import { ProductFragment } from "../fragments";

export const ProductsByCategoryQuery = gql`
  ${ProductFragment}
  query ProductQuery($catID: ID, $sort: String, $sizeID: ID) {
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
