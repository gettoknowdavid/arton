import {ApiCategoryCategory} from "@arton/types";
import fetchApi from "@/lib/fetch-api";

const QUERY: string = `
  query GetCategories($filters: CategoryFiltersInput) {
    categories(filters: $filters) {
      documentId
      name
      code
      slug
      description
      gender
      image {
        url
        name
      }
    }
  }
`;

interface CategoriesResponse {
    categories: ApiCategoryCategory[];
}

export default async function getCategories(parent: string): Promise<ApiCategoryCategory[]> {
    const data = await fetchApi<CategoriesResponse>(QUERY, {
        variables: {filters: {gender: {eq: parent}}},
        tags: ['categories', `categories-${parent}`],
    });
    return data.categories;
}