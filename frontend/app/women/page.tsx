import React from "react";
import getCategories from "@/lib/get-categories";

export default async function WomenPage() {
    const categories = await getCategories('women');
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            Women
            <div>
                <ul>{categories.map((category, index) => {
                    return (<li key={index}>{category.name}</li>);
                })}</ul>
            </div>
        </div>
    );
}
