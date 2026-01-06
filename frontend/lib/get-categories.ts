import fetchApi from "@/lib/fetch-api";
import {components} from "@/lib/types/strapi";

type Category = components['schemas']['Category'];

interface CategoriesResponse {
    categories: Category[];
}

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

export default async function getCategories(parent: string): Promise<Category[]> {
    const response = await fetchApi<CategoriesResponse>(QUERY, {
        variables: {filters: {gender: {in: ["unisex", `${parent}`]}}},
        tags: ['categories', `categories-${parent}`],
    });
    return response.categories ?? [];
}