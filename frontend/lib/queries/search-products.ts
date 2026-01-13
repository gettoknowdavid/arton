import {components} from "@/lib/types/strapi";
import fetchApi from "@/lib/fetch-api";

type Product = components["schemas"]["Product"];

interface SearchResponse {
    products: Product[];
}

interface Props {
    query?: string;
}

const QUERY = `
  query Search($filters: ProductFiltersInput) {
    products(filters: $filters) {
      documentId
      name
      slug
      price
      image {
        url
        name
      }
    }
  }
`;


export default async function searchProducts({query}: Props): Promise<Product[]> {
    const response = await fetchApi<SearchResponse>(QUERY, {
        revalidate: 0,
        tags: ['search-products', `search-products-${query}`],
        variables: {filters: {name: {containsi: query}}},
    });
    return response.products ?? [];
}

