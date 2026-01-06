const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function getSanitizedStrapiUrl(url?: string) {
    if (url == null) return null;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${STRAPI_URL}${url}`;
}