import {components} from "@/lib/types/strapi";
import fetchApi from "@/lib/fetch-api";

type Product = components["schemas"]["Product"];

interface ProductsResponse {
    products: Product[];
}

interface Props {
    gender: string;
    categorySlugs?: string[] | undefined | null;
    sizeNames?: string[] | undefined | null;
    sort?: string | undefined | null;
}

const QUERY = `
  query Products($filters: ProductFiltersInput, $sort: [String]) {
    products(filters: $filters, sort: $sort) {
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

export default async function getProducts({gender, categorySlugs, sizeNames, sort}: Props): Promise<Product[]> {
    const hasCategorySlugs = categorySlugs && categorySlugs.length > 0;
    const hasSizeNames = sizeNames && sizeNames.length > 0;

    const response = await fetchApi<ProductsResponse>(QUERY, {
        revalidate: 0,
        tags: ['products', `products-${gender}`],
        variables: {
            filters: {
                gender: {in: ["unisex", `${gender}`]},
                category: hasCategorySlugs && {slug: {in: categorySlugs}},
                sizes: hasSizeNames && {name: {in: sizeNames}},
            },
            sort: sort && [sort],
        },
    });
    return response.products ?? [];
}

