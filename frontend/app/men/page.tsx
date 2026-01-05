import React from "react";
import getCategories from "@/lib/get-categories";

export default async function MenPage() {
    const categories = await getCategories('men');
    return (
        <div className="flex min-h-screen items-center justify-center">
            Men
            <div>
                <ul>{categories.map((category, index) => {
                    return (<li key={index}>{category.name}</li>);
                })}</ul>
            </div>
        </div>
    );
}
