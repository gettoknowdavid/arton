const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_GRAPHQL_URL = `${STRAPI_URL}/graphql`;

export interface FetchApiOptions {
    variables?: Record<string, any>;
    revalidate?: number;
    tags?: string[];
};

/**
 * Fetch data from Strapi GraphQL API
 * @param query - GraphQL query string
 * @param options - Query options (variables, revalidate, tags)
 * @returns Promise with the data
 */
export default async function fetchApi<T>(query: string, options?: FetchApiOptions): Promise<T> {
    const {revalidate = 3600, variables = {}, tags = []} = options || {};

    try {
        const response = await fetch(STRAPI_GRAPHQL_URL, {
            body: JSON.stringify({query, variables}),
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${STRAPI_API_TOKEN}`},
            method: "POST",
            next: {revalidate, tags}
        });

        if (!response.ok) {
            const errorData = await response.json();
            // Log the error details or send to an error reporting service
            console.error('API Error:', errorData.error.message, errorData.error.details);
            // Throw an error to be caught by the caller
            throw new Error(errorData.error.message || `Failed to fetch ${path}`);
        }

        // The response is ok, return the data with the expected type
        const jsonResponse: StrapiResponse<T> = await response.json();
        return jsonResponse.data;
    } catch (error) {
        console.error('API Fetch Error:', error);
        throw error;
    }
}