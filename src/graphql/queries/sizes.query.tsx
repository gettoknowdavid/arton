import { gql } from "@apollo/client";
import { SizeFragment } from "../fragments";

export const SizesQuery = gql`
  ${SizeFragment}
  query SizesQuery {
    sizes(sort: ["id"]) {
      data {
        ...SizeFragment
      }
    }
  }
`;
