import {components} from "@/lib/types/strapi";
import fetchApi from "@/lib/fetch-api";

type Product = components["schemas"]["Product"];

interface ProductsResponse {
    products: Product[];
}

interface Props {
    gender: string;
    categorySlugs?: string[] | undefined | null;
}

const QUERY = `
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters) {
      documentId
      name
      slug
      price
      priceRaw
      image {
        url
        name
      }
    }
  }
`;

export default async function getProducts({gender, categorySlugs}: Props): Promise<Product[]> {
    const hasCategorySlugs = categorySlugs && categorySlugs.length > 0;
    const response = await fetchApi<ProductsResponse>(QUERY, {
        tags: ['products', `products-${gender}`],
        variables: {
            filters: {
                gender: {in: ["unisex", `${gender}`]},
                category: hasCategorySlugs && {slug: {in: categorySlugs}},
            },
        },
        revalidate: 0,
    });
    return response.products ?? [];
}

