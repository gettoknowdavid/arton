import { DocumentNode, gql } from "@apollo/client";
import { CategoryFragment } from "../fragments";

export const CategoriesQuery: DocumentNode = gql`
  ${CategoryFragment}
  query CategoriesQuery {
    categories {
      data {
        ...CategoryFragment
      }
    }
  }
`;
