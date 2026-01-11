import {components} from "@/lib/types/strapi";
import fetchApi from "@/lib/fetch-api";

type Product = components["schemas"]["Product"];

interface ProductResponse {
    products: Product[];
}

const QUERY = `
  query Product($filters: ProductFiltersInput) {
    products(filters: $filters) {
      documentId
      slug
      skuId
      name
      description
      details
      gender
      price
      currency
      sizeGuide
      color
      sizes {
        label
        documentId
        name
        order
      }
      image {
        url
        name
      }
      images {
        documentId
        url
        name
      }
      category {
        documentId
        code
        name
        slug
        gender
      }
      panelInformation {
        id
        type
        title
        introduction
        description
      }
    }
  }
`;

export default async function getProduct(slug: string): Promise<Product | undefined | null> {
    const tags = ['product', `product-${slug}`];
    const variables = {filters: {slug: {eq: slug}}};
    const response = await fetchApi<ProductResponse>(QUERY, {tags, variables, revalidate: 0});
    if (response.products.length === 0) return undefined;
    return response.products[0];
}