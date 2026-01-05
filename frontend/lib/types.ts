// The generic structure for successful Strapi responses for a single item
export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// The generic structure for successful Strapi responses for a list of items
export interface StrapiCollectionResponse<T> {
    data: T[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// The structure for Strapi error responses
export interface StrapiErrorResponse {
    data: undefined;
    error?: {
        status?: number;
        name?: string;
        message?: string;
        details?: Record<string, unknown>;
    };
}

// A union type for the API function's return value
export type ApiResponse<T> = StrapiResponse<T> | StrapiErrorResponse;
