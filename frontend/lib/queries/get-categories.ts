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
        tags: ['categories', `categories-${parent}`],
        variables: {filters: {gender: {in: ["unisex", `${parent}`]}}},
        revalidate: 0,
    });
    return response.categories ?? [];
}