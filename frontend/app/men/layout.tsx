import type {Metadata} from "next";
import React from "react";
import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: `Men • ${siteConfig.description}`,
        template: `%s • ${siteConfig.title}`,
    },
    description: siteConfig.description,
    // icons: {icon: "/icon.png"},
};

export default function MenLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <section>
            {children}
        </section>
    );
}