import {components} from "@/lib/types/strapi";
import fetchApi from "@/lib/fetch-api";

const QUERY = `
  query Sizes($filters: SizeFiltersInput, $sort: [String]) {
    sizes(filters: $filters, sort: $sort) {
      order
      name
      label
      category
    }
  }
`;

type Size = components["schemas"]["Size"];

interface SizesResponse {
    sizes: Size[];
}

export default async function getSizes(category: string) {
    const response = await fetchApi<SizesResponse>(QUERY, {
        tags: ['sizes', `sizes-${category}`],
        variables: {
            filters: {category: {eq: "clothing"}},
            sort: ["order"]
        },
    });
    return response.sizes ?? [];
}