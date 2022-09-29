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

export const SelectCategoryQuery: DocumentNode = gql`
  query SelectCategoryQuery($list: [String]!) {
    categories(filters: { variant: { in: $list } }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
